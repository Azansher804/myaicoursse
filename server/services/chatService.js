const crypto = require("crypto");
const data = require("../data/automotiveData");

const sessions = new Map();

function getOrCreateSession(sessionId) {
  if (sessionId && sessions.has(sessionId)) {
    return { id: sessionId, memory: sessions.get(sessionId) };
  }

  const id = crypto.randomUUID();
  const memory = {
    history: [],
    lastVehicles: [],
    lastTopic: null
  };
  sessions.set(id, memory);
  return { id, memory };
}

function findMatchingVehicles(message) {
  const query = message.toLowerCase();
  return data.vehicles.filter(
    (vehicle) =>
      query.includes(vehicle.name.toLowerCase()) ||
      query.includes(vehicle.manufacturer.toLowerCase()) ||
      query.includes(vehicle.category.toLowerCase()) ||
      query.includes(String(vehicle.year))
  );
}

function buildResponse(message, memory) {
  const lower = message.toLowerCase();
  const matches = findMatchingVehicles(message);

  if (matches.length > 0) {
    memory.lastVehicles = matches.slice(0, 3);
    memory.lastTopic = "vehicle_lookup";
    const details = memory.lastVehicles
      .map(
        (vehicle) =>
          `• ${vehicle.name} (${vehicle.year}) — ${vehicle.engine}, ${vehicle.power}, ${vehicle.topSpeed}. ${vehicle.summary}`
      )
      .join("\n");

    return {
      answer: `Here are relevant vehicles from the automotive encyclopedia:\n${details}`,
      followUps: [
        "Would you like a direct comparison between any two of these?",
        "I can explain how their engineering reflects their era.",
        "Ask for design, safety, or performance milestones for these models."
      ]
    };
  }

  if (lower.includes("compare") && memory.lastVehicles.length >= 2) {
    const [first, second] = memory.lastVehicles;
    memory.lastTopic = "comparison";
    return {
      answer: `Comparing ${first.name} and ${second.name}:\n• Era: ${first.era} vs ${second.era}\n• Propulsion: ${first.engine} vs ${second.engine}\n• Power: ${first.power} vs ${second.power}\n• Top speed: ${first.topSpeed} vs ${second.topSpeed}\nThese differences show how priorities shifted from ${first.milestone.toLowerCase()} to ${second.milestone.toLowerCase()}.`,
      followUps: [
        "Do you want a beginner-friendly or technical explanation?",
        "I can compare handling philosophy and drivetrain behavior next."
      ]
    };
  }

  if (lower.includes("timeline") || lower.includes("history")) {
    memory.lastTopic = "timeline";
    const timeline = data.milestones.map((item) => `${item.year}: ${item.event}`).join("\n");
    return {
      answer: `Automotive timeline highlights:\n${timeline}`,
      followUps: [
        "Pick an era and I can dive deeper into representative cars.",
        "Ask how motorsport changed road-car technology over time."
      ]
    };
  }

  if (lower.includes("engine") || lower.includes("electric") || lower.includes("hybrid")) {
    memory.lastTopic = "propulsion";
    return {
      answer:
        "Engine and propulsion evolution moved from carbureted naturally aspirated layouts to electronically controlled injection, forced induction, hybrid systems, and fully electric multi-motor architectures. Modern EVs optimize torque vectoring and software updates, while hybrids bridge range and efficiency.",
      followUps: [
        "Want this broken down by decade?",
        "I can compare ICE, hybrid, and EV pros/cons by use case."
      ]
    };
  }

  return {
    answer:
      "I can help with car history, specs, engineering concepts, manufacturer timelines, and cross-era comparisons. Try asking things like 'Compare the Model T and Model S', 'Show EV milestones', or 'How did safety technology evolve?'",
    followUps: [
      "Ask for a specific manufacturer timeline.",
      "Ask for beginner or expert depth in the next answer."
    ]
  };
}

function handleChat({ message, sessionId }) {
  const { id, memory } = getOrCreateSession(sessionId);
  const response = buildResponse(message, memory);

  memory.history.push({ role: "user", content: message });
  memory.history.push({ role: "assistant", content: response.answer });
  if (memory.history.length > 20) {
    memory.history = memory.history.slice(-20);
  }

  sessions.set(id, memory);

  return {
    sessionId: id,
    ...response,
    context: {
      topic: memory.lastTopic,
      referencedVehicles: memory.lastVehicles.map((vehicle) => vehicle.name)
    }
  };
}

module.exports = {
  handleChat
};
