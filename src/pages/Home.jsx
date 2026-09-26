import { Link } from 'react-router-dom';
import { services } from '../data/services';

const capabilities = [
  { num: '01', label: 'Strategy' },
  { num: '02', label: 'Delivery' },
  { num: '03', label: 'Capability' },
];

const reasons = [
  { num: '01', title: 'Practical Solutions', body: 'Focused on real-world applications.' },
  { num: '02', title: 'Professional', body: 'A culture built around quality and continuous improvement.' },
  { num: '03', title: 'Technology Driven', body: 'Modern technologies and development practices.' },
  { num: '04', title: 'Future Focused', body: 'Preparing organizations and professionals for the evolving digital economy.' },
];

const techAreas = [
  { icon: '🧠', label: 'AI & Machine Learning' },
  { icon: '🛡️', label: 'Cybersecurity' },
  { icon: '☁️', label: 'Cloud & DevOps' },
  { icon: '💻', label: 'Full-Stack Development' },
  { icon: '📡', label: 'IoT & Embedded Systems' },
  { icon: '📊', label: 'Technology & Project Management' },
];



export default function Home() {
  return (
    <>
      <section className="hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">TECHNOLOGY FOR WHAT'S NEXT</div>
            <h1>Technology.<br />Innovation.<br />Execution.</h1>
            <p className="lead">
              GDXT delivers technology solutions, professional training, and IT project management for organizations and individuals building for the future.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Work With GDXT →</Link>
              <Link to="/services" className="btn btn-outline">Explore Our Services →</Link>
            </div>
          </div>
          <div
            className="hero-visual has-image"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/36706459/pexels-photo-36706459.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1000&fit=crop&dpr=1')" }}
          >
            <div className="signal" />
            <div className="system-tags">
              <span>AI</span>
              <span>CLOUD</span>
              <span>SECURITY</span>
              <span>DATA</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div
            className="two-col-media has-image"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/16323581/pexels-photo-16323581.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1000&fit=crop&dpr=1')" }}
          />
          <div className="two-col-copy">
            <div className="section-label"><span className="accent" /><span>WHO WE ARE</span></div>
            <h2 className="heading-xl">Building Technology. Developing People. Delivering Results.</h2>
            <p className="body-text">
              GDXT combines technology services, consulting, project management, and practical professional training to help organizations execute with confidence and people build skills that matter.
            </p>
            <div className="capabilities">
              {capabilities.map((c) => (
                <div key={c.num}>
                  <span className="num">{c.num}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark tight">
        <div className="container">
          <div className="section-label on-dark"><span className="accent" /><span>WHY GDXT?</span></div>
          <div className="reason-grid">
            {reasons.map((r) => (
              <div className="reason-card" key={r.num}>
                <span className="num">{r.num}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="two-col-copy" style={{ maxWidth: 500 }}>
            <div className="section-label"><span className="accent" /><span>PROFESSIONAL TRAINING</span></div>
            <h2 className="heading-xl">Learn. Build. Advance.</h2>
            <p className="body-text">
              GDXT provides practical technology training designed to help students and professionals develop relevant skills in today's digital economy.
            </p>
            <Link to="/training" className="btn btn-primary" style={{ marginTop: 24 }}>Explore Training →</Link>
          </div>
          <div className="tech-grid">
            {techAreas.map((t) => (
              <div className="tech-tile" key={t.label}>
                <div className="icon-box">{t.icon}</div>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="services-heading">
            <div>
              <div className="section-label"><span className="accent" /><span>OUR EXPERTISE</span></div>
              <h2 className="heading-xl" style={{ marginBottom: 0 }}>What We Do</h2>
            </div>
            <p className="body-text" style={{ maxWidth: 500 }}>
              Integrated technology expertise—from strategic direction to dependable delivery and lasting capability.
            </p>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="service-card related-card" key={s.slug}>
                <div className="icon-box">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </div>
                <span className="explore-link">EXPLORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', paddingBottom: 0 }}>
        <div className="container program">
          <div
            className="program-visual has-image"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/8649999/pexels-photo-8649999.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop&dpr=1')" }}
          />
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
            <Link to="/training" className="btn btn-primary">Learn More →</Link>
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
