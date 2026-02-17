export const categories = [
  {
    id: 'classic',
    name: 'Classic Cars',
    description: 'Foundational vehicles from the brass era through post-war icons.',
    highlights: ['Ford Model T', 'Jaguar E-Type', 'Mercedes-Benz 300SL']
  },
  {
    id: 'muscle',
    name: 'Muscle Cars',
    description: 'High-displacement, straight-line performance heroes.',
    highlights: ['Ford Mustang Boss 429', 'Dodge Challenger R/T', 'Chevrolet Chevelle SS']
  },
  {
    id: 'supercars',
    name: 'Supercars',
    description: 'Extreme performance and exotic engineering.',
    highlights: ['Ferrari F40', 'McLaren F1', 'Lamborghini Aventador']
  },
  {
    id: 'ev',
    name: 'Electric Vehicles',
    description: 'Battery-powered mobility from early experiments to modern flagships.',
    highlights: ['GM EV1', 'Tesla Model S Plaid', 'Rimac Nevera']
  },
  {
    id: 'suv',
    name: 'SUVs',
    description: 'Utility-focused family and adventure platforms.',
    highlights: ['Range Rover', 'Toyota Land Cruiser', 'Jeep Grand Cherokee']
  },
  {
    id: 'trucks',
    name: 'Trucks',
    description: 'Workhorses evolving into versatile multi-role vehicles.',
    highlights: ['Ford F-Series', 'RAM 1500', 'Chevrolet Silverado']
  },
  {
    id: 'concept',
    name: 'Concept Vehicles',
    description: 'Design studies and technology demonstrators shaping future production cars.',
    highlights: ['GM Firebird III', 'Mercedes-Benz Vision EQXX', 'BMW i Vision Dee']
  }
];

export const manufacturers = [
  {
    name: 'Ford',
    founded: 1903,
    origin: 'United States',
    milestones: [
      '1908: Model T popularizes mass automotive adoption.',
      '1964: Mustang launches the pony car segment.',
      '2022: F-150 Lightning brings EV power to mainstream trucks.'
    ]
  },
  {
    name: 'Mercedes-Benz',
    founded: 1926,
    origin: 'Germany',
    milestones: [
      '1886: Benz Patent-Motorwagen marks the first practical automobile.',
      '1954: 300SL introduces fuel injection to production sports cars.',
      '2020s: EQ range scales premium electric mobility.'
    ]
  },
  {
    name: 'Toyota',
    founded: 1937,
    origin: 'Japan',
    milestones: [
      '1997: Prius launches hybrid era for mass markets.',
      '2000s: Global reliability benchmark across segments.',
      '2020s: Multi-path strategy spanning hybrid, hydrogen, and battery EVs.'
    ]
  },
  {
    name: 'Tesla',
    founded: 2003,
    origin: 'United States',
    milestones: [
      '2008: Roadster proves EV performance credibility.',
      '2012: Model S resets expectations for EV range and software.',
      '2020s: Gigafactory scale drives battery cost reduction.'
    ]
  },
  {
    name: 'Ferrari',
    founded: 1947,
    origin: 'Italy',
    milestones: [
      '1947: 125 S begins Ferrari road and race heritage.',
      '1987: F40 becomes a turbocharged performance icon.',
      '2020s: Hybridized V6 and V12 systems merge tradition with efficiency.'
    ]
  }
];

export const technologies = [
  { era: '1880s-1910s', title: 'Mechanical Foundations', detail: 'Carburetors, chain drive, magneto ignition, hand-crank start.' },
  { era: '1920s-1950s', title: 'Industrial Maturity', detail: 'All-steel bodies, hydraulic brakes, synchromesh gearboxes.' },
  { era: '1960s-1980s', title: 'Performance & Safety Leap', detail: 'Disc brakes, crumple zones, electronic fuel injection, turbocharging.' },
  { era: '1990s-2010s', title: 'Digital Integration', detail: 'ECU networks, ABS, traction control, hybrid drivetrains, infotainment.' },
  { era: '2020s+', title: 'Electrification & Autonomy', detail: 'High-density batteries, ADAS sensor fusion, OTA updates, software-defined vehicles.' }
];

export const educationalModules = [
  {
    id: 'engineering-basics',
    title: 'Car Engineering Basics',
    points: ['Powertrain layout fundamentals', 'Suspension geometry essentials', 'Aerodynamics and drag coefficient impact']
  },
  {
    id: 'tech-evolution',
    title: 'Evolution of Automotive Technology',
    points: ['From mechanical linkages to software-defined control', 'Safety regulations as innovation catalysts', 'Materials science and lightweighting']
  },
  {
    id: 'fuel-propulsion',
    title: 'Fuel Systems & Electric Propulsion',
    points: ['Carburetion versus direct injection', 'Hybrid architecture types', 'Battery chemistries and charging curves']
  },
  {
    id: 'motorsport',
    title: 'Motorsport Influence on Road Cars',
    points: ['Aero downforce and cooling strategy transfer', 'Carbon-ceramic brakes and active suspension', 'Race-to-road telemetry and simulation workflows']
  }
];

export const featuredVehicles = [
  {
    id: 'benz-patent',
    name: 'Benz Patent-Motorwagen',
    year: 1886,
    manufacturer: 'Benz',
    bodyType: 'Three-wheeler',
    engine: 'Single-cylinder internal combustion',
    era: 'Pioneer',
    summary: 'Widely recognized as the first practical automobile.'
  },
  {
    id: 'model-t',
    name: 'Ford Model T',
    year: 1908,
    manufacturer: 'Ford',
    bodyType: 'Touring car',
    engine: '2.9L inline-4',
    era: 'Mass Production',
    summary: 'Democratized car ownership through assembly-line manufacturing.'
  },
  {
    id: 'f40',
    name: 'Ferrari F40',
    year: 1987,
    manufacturer: 'Ferrari',
    bodyType: 'Supercar coupe',
    engine: '2.9L twin-turbo V8',
    era: 'Analog Performance',
    summary: 'Legendary lightweight supercar with raw driver focus.'
  },
  {
    id: 'prius',
    name: 'Toyota Prius',
    year: 1997,
    manufacturer: 'Toyota',
    bodyType: 'Liftback',
    engine: 'Hybrid gasoline-electric',
    era: 'Hybrid Breakthrough',
    summary: 'Mainstreamed hybrid efficiency at global scale.'
  },
  {
    id: 'model-s',
    name: 'Tesla Model S Plaid',
    year: 2021,
    manufacturer: 'Tesla',
    bodyType: 'Luxury sedan',
    engine: 'Tri-motor electric',
    era: 'Software-Defined EV',
    summary: 'Combined hypercar acceleration with practical EV range.'
  }
];
