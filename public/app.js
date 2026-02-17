const state = {
  vehicles: [],
  sessionId: null
};

const vehicleGrid = document.getElementById("vehicle-grid");
const timelineContainer = document.getElementById("timeline");
const modulesContainer = document.getElementById("modules");
const manufacturerContainer = document.getElementById("manufacturer-timelines");
const compareA = document.getElementById("compare-a");
const compareB = document.getElementById("compare-b");
const compareOutput = document.getElementById("compare-output");
const categorySelect = document.getElementById("category-select");
const chatWidget = document.getElementById("chat-widget");
const chatToggle = document.getElementById("chat-toggle");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatLog = document.getElementById("chat-log");

async function request(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

function vehicleCard(vehicle) {
  return `<article class="card">
      <h4>${vehicle.name}</h4>
      <small>${vehicle.manufacturer} • ${vehicle.year} • ${vehicle.category}</small>
      <p>${vehicle.summary}</p>
      <small>${vehicle.engine} • ${vehicle.power} • ${vehicle.topSpeed}</small>
    </article>`;
}

function renderVehicles(vehicles) {
  if (!vehicles.length) {
    vehicleGrid.innerHTML = `<p>No vehicles match this filter. Try broadening your search.</p>`;
    return;
  }

  vehicleGrid.innerHTML = vehicles.map(vehicleCard).join("");
}

function renderComparisonSelectors(vehicles) {
  const options = vehicles
    .map((vehicle) => `<option value="${vehicle.id}">${vehicle.name} (${vehicle.year})</option>`)
    .join("");

  compareA.innerHTML = `<option value="">Select vehicle A</option>${options}`;
  compareB.innerHTML = `<option value="">Select vehicle B</option>${options}`;
}

function appendChatMessage(type, text) {
  const div = document.createElement("div");
  div.className = `chat-message ${type}`;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

async function loadInitialData() {
  const [knowledge, vehiclesResponse, timeline, modules, manufacturers] = await Promise.all([
    request("/api/knowledge"),
    request("/api/vehicles"),
    request("/api/timeline"),
    request("/api/modules"),
    request("/api/manufacturers")
  ]);

  state.vehicles = vehiclesResponse.vehicles;
  renderVehicles(state.vehicles);
  renderComparisonSelectors(state.vehicles);

  categorySelect.innerHTML = `<option value="">All categories</option>${knowledge.categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;

  timelineContainer.innerHTML = timeline
    .map((item) => `<article class="card"><strong>${item.year}</strong><p>${item.event}</p></article>`)
    .join("");

  modulesContainer.innerHTML = modules
    .map(
      (module) =>
        `<article class="card"><strong>${module.title}</strong><p>${module.description}</p><small>${module.level}</small></article>`
    )
    .join("");

  manufacturerContainer.innerHTML = Object.entries(manufacturers)
    .map(
      ([brand, years]) =>
        `<article class="card"><strong>${brand}</strong><p>${years.join(" → ")}</p></article>`
    )
    .join("");

  appendChatMessage(
    "assistant",
    "Welcome to AutoVerse AI. Ask me about any car, manufacturer, era, or engineering concept."
  );
}

document.getElementById("search-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const params = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (value) {
      params.set(key, value);
    }
  }

  const response = await request(`/api/vehicles?${params.toString()}`);
  renderVehicles(response.vehicles);
});

document.getElementById("compare-button").addEventListener("click", async () => {
  const ids = [compareA.value, compareB.value].filter(Boolean);
  if (ids.length < 2) {
    compareOutput.textContent = "Select two vehicles to compare.";
    return;
  }

  const comparison = await request("/api/compare", {
    method: "POST",
    body: JSON.stringify({ vehicleIds: ids })
  });

  compareOutput.textContent = `${comparison.insight}\n\n${comparison.vehicles
    .map(
      (vehicle) =>
        `${vehicle.name}: ${vehicle.year}, ${vehicle.engine}, ${vehicle.power}, ${vehicle.topSpeed}, ${vehicle.drivetrain}`
    )
    .join("\n")}`;
});

chatToggle.addEventListener("click", () => {
  chatWidget.classList.toggle("collapsed");
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) {
    return;
  }

  appendChatMessage("user", message);
  chatInput.value = "";

  const payload = await request("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message, sessionId: state.sessionId })
  });

  state.sessionId = payload.sessionId;
  appendChatMessage("assistant", `${payload.answer}\n\nFollow-ups:\n- ${payload.followUps.join("\n- ")}`);
});

loadInitialData().catch((error) => {
  console.error(error);
  vehicleGrid.innerHTML = `<p>Failed to load data. Check server logs.</p>`;
});
