import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo />
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary">Get Started →</Link>
        <button
          className="nav-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`mobile-nav${open ? ' open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get Started →</Link>
      </nav>
    </header>
  );
}
