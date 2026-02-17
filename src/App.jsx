import { useEffect, useMemo, useState } from 'react';
import ChatWidget from './components/ChatWidget';
import Timeline from './components/Timeline';
import ComparisonPanel from './components/ComparisonPanel';

const defaultFilters = { brand: '', year: '', bodyType: '', engine: '' };

export default function App() {
  const [catalog, setCatalog] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => v && params.append(k, v));
    return params.toString();
  }, [filters]);

  useEffect(() => {
    const url = query ? `/api/catalog?${query}` : '/api/catalog';
    fetch(url)
      .then((res) => res.json())
      .then(setCatalog)
      .catch(() => setCatalog({ results: [] }));
  }, [query]);

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="badge">AI-powered automotive intelligence</p>
        <h1>AutoIntel Atlas</h1>
        <p>
          Explore the complete story of automobiles — classic pioneers, muscle legends, EV innovators,
          and autonomous futures — with conversational AI and structured expert knowledge.
        </p>
      </header>

      <main>
        <section className="glass section">
          <h2>Smart Vehicle Discovery</h2>
          <div className="filters">
            {Object.keys(defaultFilters).map((key) => (
              <input
                key={key}
                placeholder={`Filter by ${key}`}
                value={filters[key]}
                onChange={(e) => setFilters((prev) => ({ ...prev, [key]: e.target.value }))}
              />
            ))}
            <button onClick={() => setFilters(defaultFilters)}>Reset</button>
          </div>
          <div className="vehicle-grid">
            {catalog?.results?.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.id}>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.year} · {vehicle.manufacturer}</p>
                <p>{vehicle.engine}</p>
                <p>{vehicle.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass section">
          <h2>Manufacturer Timelines</h2>
          <div className="timeline manufacturers">
            {catalog?.manufacturers?.map((maker) => (
              <article key={maker.name} className="timeline-card">
                <h4>{maker.name}</h4>
                <p>{maker.origin} · Founded {maker.founded}</p>
                <ul>{maker.milestones.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <Timeline technologies={catalog?.technologies ?? []} />
        <ComparisonPanel vehicles={catalog?.results?.length ? catalog.results : []} />

        <section className="glass section">
          <h2>Educational Modules</h2>
          <div className="modules">
            {catalog?.educationalModules?.map((module) => (
              <article key={module.id} className="module-card">
                <h3>{module.title}</h3>
                <ul>{module.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <ChatWidget />
    </div>
  );
}
