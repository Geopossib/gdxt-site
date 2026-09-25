import { Link } from 'react-router-dom';

export default function Logo({ dark = false }) {
  return (
    <Link to="/" className="logo" aria-label="GDXT home">
      <span className="logo-mark">G</span>
      <span className={`logo-word${dark ? ' on-dark' : ''}`}>GDXT</span>
    </Link>
  );
}
