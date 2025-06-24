import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand text-white">
          JOHN DOE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link text-white">
                SERVICE
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link text-white">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mentionlegal" className="nav-link text-white">
                MENTION LEGAL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}