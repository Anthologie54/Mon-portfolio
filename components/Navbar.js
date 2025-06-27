import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand text-white">
          JOHN DOE
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className={`nav-link text-white ${isActive('/') ? 'active' : ''}`}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className={`nav-link text-white ${isActive('/service') ? 'active' : ''}`}>
                SERVICE
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className={`nav-link text-white ${isActive('/portfolio') ? 'active' : ''}`}>
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link text-white ${isActive('/contact') ? 'active' : ''}`}>
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mentionslegales" className={`nav-link text-white ${isActive('/mentionlegal') ? 'active' : ''}`}>
                MENTIONS LEGALES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}