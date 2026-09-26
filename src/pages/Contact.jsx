export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out — this is a demo form and is not yet connected to a backend.');
  };

  return (
    <>
      <section className="hero page-hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">CONTACT</div>
            <h1 style={{ fontSize: 48, fontWeight: 400 }}>Let's Talk.</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Whether you need technology expertise, project support, consulting, or professional training, GDXT is ready to help.
            </p>
          </div>
          <div
            className="hero-visual has-image"
            style={{ height: 340, backgroundImage: "url('https://images.pexels.com/photos/5833879/pexels-photo-5833879.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop&dpr=1')" }}
          />
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="field">
                <label htmlFor="topic">What can we help with?</label>
                <input id="topic" name="topic" type="text" placeholder="Project management, consulting, training..." />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell us about your project or goals" />
              </div>
              <button type="submit" className="btn btn-primary">Send Message →</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <h4>Email</h4>
              <p>hello@gdxt.io</p>
            </div>
            <div className="contact-card">
              <h4>Phone</h4>
              <p>+1 (555) 010-0199</p>
            </div>
            <div className="contact-card">
              <h4>Location</h4>
              <p>Remote-first, serving clients nationwide</p>
            </div>
            <div className="help-list">
              <div className="help-item">Technology Consulting</div>
              <div className="help-item">Project Management</div>
              <div className="help-item">Professional Training</div>
              <div className="help-item">Software Development</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
