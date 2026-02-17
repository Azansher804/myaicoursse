const data = require("../data/automotiveData");

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function getVehicles(filters = {}) {
  const { manufacturer, year, bodyType, engine, category } = filters;

  return data.vehicles.filter((vehicle) => {
    const matchesManufacturer = manufacturer
      ? normalize(vehicle.manufacturer).includes(normalize(manufacturer))
      : true;
    const matchesYear = year ? Number(vehicle.year) === Number(year) : true;
    const matchesBodyType = bodyType
      ? normalize(vehicle.bodyType).includes(normalize(bodyType))
      : true;
    const matchesEngine = engine ? normalize(vehicle.engine).includes(normalize(engine)) : true;
    const matchesCategory = category
      ? normalize(vehicle.category).includes(normalize(category))
      : true;

    return matchesManufacturer && matchesYear && matchesBodyType && matchesEngine && matchesCategory;
  });
}

function compareVehicles(vehicleIds = []) {
  const selected = data.vehicles.filter((vehicle) => vehicleIds.includes(vehicle.id));
  const comparison = selected.map((vehicle) => ({
    id: vehicle.id,
    name: vehicle.name,
    year: vehicle.year,
    power: vehicle.power,
    engine: vehicle.engine,
    topSpeed: vehicle.topSpeed,
    drivetrain: vehicle.drivetrain,
    category: vehicle.category
  }));

  return {
    vehicles: comparison,
    insight:
      comparison.length >= 2
        ? `${comparison[0].name} and ${comparison[1].name} represent different engineering priorities: compare propulsion strategy, power delivery, and era-specific safety/performance standards.`
        : "Select at least two vehicles for a full comparison insight."
  };
}

function getKnowledgeSnapshot() {
  return {
    categories: data.categories,
    totalVehicles: data.vehicles.length,
    manufacturers: [...new Set(data.vehicles.map((vehicle) => vehicle.manufacturer))].sort(),
    milestones: data.milestones,
    modules: data.engineeringModules
  };
}

module.exports = {
  getVehicles,
  compareVehicles,
  getKnowledgeSnapshot
};
