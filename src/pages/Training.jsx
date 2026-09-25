const techAreas = [
  { icon: '🧠', label: 'AI & Machine Learning' },
  { icon: '🛡️', label: 'Cybersecurity' },
  { icon: '☁️', label: 'Cloud & DevOps' },
  { icon: '💻', label: 'Full-Stack Development' },
  { icon: '📡', label: 'IoT & Embedded Systems' },
  { icon: '📊', label: 'Technology & Project Management' },
];

export default function Training() {
  return (
    <>
      <section className="hero page-hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">PROFESSIONAL TRAINING</div>
            <h1>Learn. Build. Advance.</h1>
            <p className="lead">
              GDXT provides practical technology training designed to help students and professionals develop relevant skills in today's digital economy.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">Enroll Now →</a>
            </div>
          </div>
          <div className="hero-visual" style={{ height: 340 }} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label"><span className="accent" /><span>TRAINING AREAS</span></div>
          <h2 className="heading-xl">What You Can Learn</h2>
          <div className="tech-grid" style={{ marginTop: 24 }}>
            {techAreas.map((t) => (
              <div className="tech-tile" key={t.label}>
                <div className="icon-box">{t.icon}</div>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', paddingBottom: 0 }}>
        <div className="container program">
          <div className="program-visual" />
          <div className="program-copy">
            <div className="section-label"><span className="accent" /><span>FEATURED PROGRAM</span></div>
            <h2 className="heading-xl" style={{ fontWeight: 400 }}>GDXT Tech Camp</h2>
            <p className="tagline">GET CERTIFIED. GET HIRED. NO WAITING.</p>
            <p className="body-text">
              An intensive, career-focused program combining practical instruction, guided projects, industry certification preparation, and professional readiness.
            </p>
            <div className="tracks">
              <span>AI & Data</span>
              <span>Cybersecurity</span>
              <span>Cloud & DevOps</span>
              <span>Full-Stack</span>
            </div>
            <a href="/contact" className="btn btn-primary">Apply Now →</a>
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ padding: '82px 0' }}>
        <div className="container final-cta" style={{ padding: 0 }}>
          <div>
            <h2>Ready to Build New Skills?</h2>
            <p>Join a training program designed around real technology roles and real career outcomes.</p>
          </div>
          <a href="/contact" className="btn btn-white">Get Started →</a>
        </div>
      </section>
    </>
  );
}
