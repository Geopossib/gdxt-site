import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import { getServiceBySlug, getRelatedServices, processSteps } from '../data/services';

const techMarquee = [
  'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Full-Stack Development',
  'IoT & Embedded Systems', 'Project Management', 'Data Engineering', 'Consulting',
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = getRelatedServices(slug);

  return (
    <>
      <section className="hero page-hero" style={{ padding: '48px 0 0' }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="current">{service.title}</span>
          </nav>
        </div>
        <div className="container hero-inner" style={{ paddingTop: 24 }}>
          <div className="hero-copy">
            <div className="hero-label">{service.tagline}</div>
            <h1 style={{ fontSize: 48 }}>{service.title}</h1>
            <p className="lead">{service.description}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Talk to an Expert →</Link>
              <Link to="/services" className="btn btn-outline">All Services →</Link>
            </div>
          </div>
          <div className="hero-visual" style={{ height: 340 }}>
            <div className="icon-box service-hero-icon">{service.icon}</div>
          </div>
        </div>
      </section>

      <section className="tight" style={{ background: '#fff', paddingBottom: 40 }}>
        <div className="container">
          <div className="stats-row">
            {service.stats.map((s) => (
              <Counter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <Marquee items={techMarquee} />
      </div>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-label"><span className="accent" /><span>WHAT'S INCLUDED</span></div>
            <h2 className="heading-xl">Capabilities</h2>
          </Reveal>
          <div className="capability-list">
            {service.capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 60} className="capability-row">
                <span className="capability-index">{String(i + 1).padStart(2, '0')}</span>
                <span>{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark tight">
        <div className="container">
          <Reveal>
            <div className="section-label on-dark"><span className="accent" /><span>HOW WE WORK</span></div>
            <h2 className="heading-xl" style={{ color: '#fff' }}>Our Process</h2>
          </Reveal>
          <div className="process-timeline">
            {processSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 100} className="process-step">
                <span className="num">{s.num}</span>
                <h4 style={{ color: '#fff' }}>{s.title}</h4>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <Reveal className="testimonial-card">
            <p className="testimonial-text">"{service.quote.text}"</p>
            <div className="testimonial-author">
              <span className="testimonial-avatar">{service.quote.name.split(' ').map((n) => n[0]).join('')}</span>
              <div>
                <strong>{service.quote.name}</strong>
                <p>{service.quote.org}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-label"><span className="accent" /><span>EXPLORE MORE</span></div>
            <h2 className="heading-xl">Related Services</h2>
          </Reveal>
          <div className="card-grid">
            {related.map((r, i) => (
              <Reveal as={Link} to={`/services/${r.slug}`} key={r.slug} delay={i * 80} className="service-card related-card">
                <div className="icon-box">{r.icon}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                </div>
                <span className="explore-link">EXPLORE →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ padding: '82px 0' }}>
        <div className="container final-cta" style={{ padding: 0 }}>
          <div>
            <h2>Have a project in mind?</h2>
            <p>Our team is ready to help you scope it, plan it, and deliver it.</p>
          </div>
          <Link to="/contact" className="btn btn-white">Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}
