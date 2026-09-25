import { Link } from 'react-router-dom';
const values = [
  'Integrity in every engagement',
  'Practical, real-world solutions',
  'Continuous learning and improvement',
  'Accountability and dependable delivery',
  'People-first technology training',
  'Future-focused innovation',
];

export default function About() {
  return (
    <>
      <section className="hero page-hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">ABOUT GDXT</div>
            <h1>Building Technology. Developing People.</h1>
            <p className="lead">
              GDXT is a technology and professional development company helping organizations execute with confidence and people build skills that matter.
            </p>
          </div>
          <div className="hero-visual" style={{ height: 340 }} />
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="two-col-media" />
          <div className="two-col-copy">
            <div className="section-label"><span className="accent" /><span>OUR STORY</span></div>
            <h2 className="heading-xl">Technology. Innovation. Execution.</h2>
            <p className="body-text">
              GDXT was founded to close the gap between ambitious technology goals and dependable delivery. We combine hands-on technology services with practical professional training, so organizations gain capability and people gain careers.
            </p>
            <p className="body-text" style={{ marginTop: 16 }}>
              From strategy through delivery, our team works alongside clients as an extension of their own—bringing structure, technical depth, and follow-through to every engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="band-dark tight">
        <div className="container">
          <div className="section-label on-dark"><span className="accent" /><span>OUR VALUES</span></div>
          <h2 className="heading-xl" style={{ color: '#fff' }}>What Drives Us</h2>
          <div className="area-grid" style={{ marginTop: 32 }}>
            {values.map((v) => (
              <div className="area-item" key={v} style={{ color: '#c7d2e1' }}>
                <span className="dot" />
                {v}
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
