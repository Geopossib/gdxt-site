import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo dark />
            <p className="tag">Technology. Innovation. Execution.</p>
            <p className="summary">
              Technology solutions, project delivery, and practical professional training for a changing digital world.
            </p>
          </div>

          <div className="footer-col">
            <h4>COMPANY</h4>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/training">Training</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>FOLLOW</h4>
            <div className="social-icons">
              <span aria-label="LinkedIn">in</span>
              <span aria-label="X">X</span>
              <span aria-label="Instagram">ig</span>
            </div>
          </div>
        </div>

        <div className="copyright-row">
          <p>© GDXT. All rights reserved.</p>
          <p>Built for the evolving digital economy.</p>
        </div>
      </div>
    </footer>
  );
}
