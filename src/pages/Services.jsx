import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { services, processSteps } from '../data/services';

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
          <div
            className="hero-visual has-image"
            style={{ height: 340, backgroundImage: "url('https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop&dpr=1')" }}
          />
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="card-grid">
            {services.map((s, i) => (
              <Reveal as={Link} to={`/services/${s.slug}`} key={s.slug} delay={i * 60} className="service-card related-card">
                <span className="capability-index" style={{ marginBottom: 4 }}>{String(i + 1).padStart(2, '0')}</span>
                <div className="icon-box">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </div>
                <span className="explore-link">LEARN MORE →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark tight">
        <div className="container">
          <div className="section-label on-dark"><span className="accent" /><span>HOW WE WORK</span></div>
          <h2 className="heading-xl" style={{ color: '#fff' }}>Our Process</h2>
          <div className="steps">
            {processSteps.map((s) => (
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
          <Link to="/contact" className="btn btn-white">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
