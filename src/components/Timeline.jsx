export default function Timeline({ technologies }) {
  return (
    <section className="glass section">
      <h2>Technology Evolution Timeline</h2>
      <div className="timeline">
        {technologies.map((tech) => (
          <article key={tech.era} className="timeline-card">
            <span>{tech.era}</span>
            <h4>{tech.title}</h4>
            <p>{tech.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
