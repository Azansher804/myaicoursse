import { categories, educationalModules, featuredVehicles, manufacturers, technologies } from './data/automotiveData.js';

const systemStyle = {
  beginner: 'Beginner-friendly explanation with clear definitions and plain language.',
  enthusiast: 'Enthusiast-focused response with moderate technical depth.',
  deepDive: 'Technical deep dive with engineering context and trade-offs.'
};

const extractProfile = (message) => {
  const lower = message.toLowerCase();
  if (lower.includes('beginner') || lower.includes('simple')) return 'beginner';
  if (lower.includes('deep dive') || lower.includes('technical')) return 'deepDive';
  return 'enthusiast';
};

const compareVehicles = (message) => {
  const hits = featuredVehicles.filter((vehicle) => message.toLowerCase().includes(vehicle.name.toLowerCase()));
  if (hits.length < 2) return null;

  return {
    title: `Comparison: ${hits.map((car) => car.name).join(' vs ')}`,
    bullets: hits.map(
      (car) => `${car.name} (${car.year}) · ${car.engine} · ${car.summary}`
    )
  };
};

const findEntityInsights = (message) => {
  const lower = message.toLowerCase();
  const manufacturersHit = manufacturers.filter((m) => lower.includes(m.name.toLowerCase()));
  const vehiclesHit = featuredVehicles.filter((v) => lower.includes(v.name.toLowerCase()));

  const insights = [];

  manufacturersHit.forEach((m) => {
    insights.push({
      heading: `${m.name} timeline`,
      details: m.milestones
    });
  });

  vehiclesHit.forEach((v) => {
    insights.push({
      heading: `${v.name} snapshot`,
      details: [
        `Year: ${v.year}`,
        `Manufacturer: ${v.manufacturer}`,
        `Body: ${v.bodyType}`,
        `Powertrain: ${v.engine}`,
        `Significance: ${v.summary}`
      ]
    });
  });

  return insights;
};

const suggestExploration = (message) => {
  const lower = message.toLowerCase();
  if (!lower.includes('similar') && !lower.includes('recommend')) return [];

  const vehicle = featuredVehicles.find((v) => lower.includes(v.name.toLowerCase()));
  if (!vehicle) return featuredVehicles.slice(0, 3).map((v) => v.name);

  return featuredVehicles
    .filter((v) => v.id !== vehicle.id && (v.manufacturer === vehicle.manufacturer || v.era === vehicle.era))
    .slice(0, 3)
    .map((v) => v.name);
};

export const buildResponse = ({ message, history = [] }) => {
  const profile = extractProfile(message);
  const contextHint = history.slice(-2).map((h) => h.user).filter(Boolean);
  const comparison = compareVehicles(message);
  const insights = findEntityInsights(message);
  const recommendations = suggestExploration(message);

  const technologyBlurb = technologies.map((t) => `${t.era}: ${t.title}`).join(' | ');

  const structured = {
    tone: systemStyle[profile],
    contextMemory: contextHint,
    keyCategories: categories.map((c) => c.name),
    knowledge: insights.length
      ? insights
      : [
          {
            heading: 'Automotive evolution overview',
            details: [
              'Early vehicles emphasized mechanical reliability and accessibility.',
              'Post-war decades accelerated design, safety, and performance innovations.',
              'Modern era prioritizes software, electrification, and assisted driving.'
            ]
          }
        ],
    comparison,
    recommendations,
    learningModules: educationalModules.map((m) => m.title),
    technologyTimeline: technologyBlurb
  };

  const narrative = [
    `Response mode: ${structured.tone}`,
    structured.contextMemory.length ? `I am considering your recent context: ${structured.contextMemory.join(' | ')}` : null,
    comparison ? `${comparison.title}: ${comparison.bullets.join(' ; ')}` : null,
    recommendations.length ? `You may also explore: ${recommendations.join(', ')}` : null
  ]
    .filter(Boolean)
    .join('\n');

  return { structured, narrative };
};
