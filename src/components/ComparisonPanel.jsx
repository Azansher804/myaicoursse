import { useMemo, useState } from 'react';

export default function ComparisonPanel({ vehicles }) {
  const [left, setLeft] = useState(vehicles[0]?.id ?? '');
  const [right, setRight] = useState(vehicles[1]?.id ?? '');

  const leftVehicle = useMemo(() => vehicles.find((v) => v.id === left), [left, vehicles]);
  const rightVehicle = useMemo(() => vehicles.find((v) => v.id === right), [right, vehicles]);

  return (
    <section className="glass section">
      <h2>Vehicle Comparison</h2>
      <div className="compare-selectors">
        <select value={left} onChange={(e) => setLeft(e.target.value)}>{vehicles.map((v) => <option value={v.id} key={v.id}>{v.name}</option>)}</select>
        <select value={right} onChange={(e) => setRight(e.target.value)}>{vehicles.map((v) => <option value={v.id} key={v.id}>{v.name}</option>)}</select>
      </div>
      <div className="compare-grid">
        {[leftVehicle, rightVehicle].map((vehicle) => (
          <article key={vehicle?.id} className="compare-card">
            <h3>{vehicle?.name}</h3>
            <p><strong>Year:</strong> {vehicle?.year}</p>
            <p><strong>Powertrain:</strong> {vehicle?.engine}</p>
            <p><strong>Body:</strong> {vehicle?.bodyType}</p>
            <p>{vehicle?.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
