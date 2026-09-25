const services = [
  { icon: '📊', title: 'IT Project Management', body: 'Planning, coordination, execution, and delivery of technology projects.' },
  { icon: '🧭', title: 'Technology Consulting', body: 'Helping organizations make informed technology decisions and implement effective solutions.' },
  { icon: '🤖', title: 'Artificial Intelligence & Machine Learning', body: 'Developing intelligent systems and applying AI to real-world problems.' },
  { icon: '🛡️', title: 'Cybersecurity', body: 'Helping organizations protect systems, data, and digital infrastructure.' },
  { icon: '☁️', title: 'Cloud & DevOps', body: 'Building scalable infrastructure and improving software delivery through modern cloud and DevOps practices.' },
  { icon: '📁', title: 'Software Development', body: 'Creating modern digital products, applications, platforms, and technology solutions.' },
];

const steps = [
  { num: '01', title: 'Discover' },
  { num: '02', title: 'Plan' },
  { num: '03', title: 'Build' },
  { num: '04', title: 'Deliver' },
];

export default function Services() {
  return (
    <>
      <section className="hero page-hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">OUR EXPERTISE</div>
            <h1>Integrated Technology Services</h1>
            <p className="lead">
              From strategic direction to dependable delivery and lasting capability—GDXT covers the full technology lifecycle.
            </p>
          </div>
          <div className="hero-visual" style={{ height: 340 }} />
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="card-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="icon-box">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <a href="/contact" className="explore-link">GET STARTED →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark tight">
        <div className="container">
          <div className="section-label on-dark"><span className="accent" /><span>HOW WE WORK</span></div>
          <h2 className="heading-xl" style={{ color: '#fff' }}>Our Process</h2>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num} style={{ borderTopColor: '#17365f' }}>
                <span className="num">{s.num}</span>
                <h4 style={{ color: '#fff' }}>{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ padding: '82px 0' }}>
        <div className="container final-cta" style={{ padding: 0 }}>
          <div>
            <h2>Let's Build What's Next.</h2>
            <p>Whether you need technology expertise, project support, consulting, or professional training, GDXT is ready to help.</p>
          </div>
          <a href="/contact" className="btn btn-white">Get Started →</a>
        </div>
      </section>
    </>
  );
}
