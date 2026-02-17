const automotiveData = {
  categories: [
    "Classic Cars",
    "Muscle Cars",
    "Supercars",
    "Electric Vehicles",
    "SUVs",
    "Trucks",
    "Concept Vehicles"
  ],
  vehicles: [
    {
      id: "ford-model-t-1908",
      name: "Ford Model T",
      manufacturer: "Ford",
      year: 1908,
      era: "Brass Era",
      category: "Classic Cars",
      bodyType: "Touring",
      engine: "2.9L Inline-4",
      power: "20 hp",
      topSpeed: "45 mph",
      drivetrain: "RWD",
      summary:
        "The Model T democratized personal mobility with assembly-line manufacturing and robust simplicity.",
      milestone: "Mass production breakthrough"
    },
    {
      id: "jaguar-e-type-1961",
      name: "Jaguar E-Type",
      manufacturer: "Jaguar",
      year: 1961,
      era: "Post-War Innovation",
      category: "Classic Cars",
      bodyType: "Coupe",
      engine: "3.8L Inline-6",
      power: "265 hp",
      topSpeed: "150 mph",
      drivetrain: "RWD",
      summary:
        "Celebrated for balancing style, speed, and affordability, often called one of the most beautiful cars ever built.",
      milestone: "Design icon"
    },
    {
      id: "ford-mustang-boss-429-1969",
      name: "Ford Mustang Boss 429",
      manufacturer: "Ford",
      year: 1969,
      era: "Muscle Era",
      category: "Muscle Cars",
      bodyType: "Fastback",
      engine: "7.0L V8",
      power: "375 hp",
      topSpeed: "118 mph",
      drivetrain: "RWD",
      summary: "Built to homologate NASCAR-ready hardware with huge displacement and straight-line character.",
      milestone: "High-displacement performance"
    },
    {
      id: "lamborghini-countach-1974",
      name: "Lamborghini Countach LP400",
      manufacturer: "Lamborghini",
      year: 1974,
      era: "Supercar Boom",
      category: "Supercars",
      bodyType: "Wedge Coupe",
      engine: "3.9L V12",
      power: "375 hp",
      topSpeed: "179 mph",
      drivetrain: "RWD",
      summary: "Defined the dramatic supercar template with angular design and theatrical presence.",
      milestone: "Supercar styling revolution"
    },
    {
      id: "bmw-m3-e30-1986",
      name: "BMW M3 (E30)",
      manufacturer: "BMW",
      year: 1986,
      era: "Touring Car Era",
      category: "Classic Cars",
      bodyType: "Sport Sedan",
      engine: "2.3L Inline-4",
      power: "192 hp",
      topSpeed: "146 mph",
      drivetrain: "RWD",
      summary: "A homologation legend blending precision chassis dynamics with motorsport DNA.",
      milestone: "Road-to-race integration"
    },
    {
      id: "toyota-prius-1997",
      name: "Toyota Prius",
      manufacturer: "Toyota",
      year: 1997,
      era: "Hybrid Transition",
      category: "Concept Vehicles",
      bodyType: "Liftback",
      engine: "1.5L Hybrid I4",
      power: "97 hp system",
      topSpeed: "106 mph",
      drivetrain: "FWD",
      summary: "Made hybrid propulsion mainstream and shifted efficiency conversations globally.",
      milestone: "Hybrid adoption"
    },
    {
      id: "bugatti-veyron-2005",
      name: "Bugatti Veyron 16.4",
      manufacturer: "Bugatti",
      year: 2005,
      era: "Hypercar Era",
      category: "Supercars",
      bodyType: "Coupe",
      engine: "8.0L W16 Quad-Turbo",
      power: "1001 hp",
      topSpeed: "253 mph",
      drivetrain: "AWD",
      summary: "Reset engineering benchmarks for speed, cooling, and luxury integration.",
      milestone: "1,000 hp production barrier"
    },
    {
      id: "tesla-model-s-plaid-2021",
      name: "Tesla Model S Plaid",
      manufacturer: "Tesla",
      year: 2021,
      era: "Electric Performance",
      category: "Electric Vehicles",
      bodyType: "Liftback Sedan",
      engine: "Tri-Motor Electric",
      power: "1,020 hp",
      topSpeed: "200 mph",
      drivetrain: "AWD",
      summary: "Showcases electric performance with instant torque, OTA software, and advanced driver assistance.",
      milestone: "EV acceleration benchmark"
    },
    {
      id: "rivian-r1t-2022",
      name: "Rivian R1T",
      manufacturer: "Rivian",
      year: 2022,
      era: "Electric Utility",
      category: "Trucks",
      bodyType: "Pickup",
      engine: "Quad-Motor Electric",
      power: "835 hp",
      topSpeed: "110 mph",
      drivetrain: "AWD",
      summary: "Represents premium electric truck innovation with off-road intelligence.",
      milestone: "Electric adventure platform"
    },
    {
      id: "mercedes-eqs-2022",
      name: "Mercedes-Benz EQS",
      manufacturer: "Mercedes-Benz",
      year: 2022,
      era: "Electric Luxury",
      category: "Electric Vehicles",
      bodyType: "Luxury Sedan",
      engine: "Dual-Motor Electric",
      power: "516 hp",
      topSpeed: "130 mph",
      drivetrain: "AWD",
      summary: "Combines aerodynamic efficiency with high-end digital luxury and autonomous-ready architecture.",
      milestone: "Luxury EV aerodynamics"
    }
  ],
  manufacturerTimelines: {
    Ford: [1903, 1908, 1964, 1969, 2022],
    Tesla: [2003, 2008, 2012, 2021],
    Toyota: [1937, 1997, 2015, 2024],
    "Mercedes-Benz": [1886, 1954, 1978, 2022],
    BMW: [1916, 1972, 1986, 2020],
    Lamborghini: [1963, 1974, 1987, 2023]
  },
  engineeringModules: [
    {
      id: "eng-basics",
      title: "Car Engineering Basics",
      description: "Understand chassis, suspension geometry, power delivery, and weight distribution fundamentals.",
      level: "Beginner"
    },
    {
      id: "tech-evolution",
      title: "Evolution of Automotive Technology",
      description: "Trace ignition, fuel injection, turbocharging, electronics, and software-defined vehicle development.",
      level: "Intermediate"
    },
    {
      id: "propulsion",
      title: "Fuel Systems & Electric Propulsion",
      description: "Compare ICE, hybrid, and BEV architectures with battery, inverter, and thermal management insights.",
      level: "Intermediate"
    },
    {
      id: "motorsport",
      title: "Motorsport Influence on Road Cars",
      description: "Explore how racing shaped aerodynamics, braking, composites, and reliability engineering.",
      level: "Advanced"
    }
  ],
  milestones: [
    { year: 1886, event: "Benz Patent-Motorwagen marks early practical automobile design." },
    { year: 1908, event: "Ford Model T scales personal transportation through mass production." },
    { year: 1959, event: "Three-point seatbelt adoption improves passenger safety." },
    { year: 1974, event: "Countach introduces the wedge-era supercar design language." },
    { year: 1997, event: "Prius ushers in mainstream hybrid-electric road cars." },
    { year: 2008, event: "Modern lithium-ion EV era accelerates with high-performance electric drivetrains." },
    { year: 2020, event: "ADAS and autonomous systems become central to premium vehicle development." }
  ]
};

module.exports = automotiveData;
