// components/Footer.js
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Colonne 1 : Infos perso */}
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p>
            40 Rue Laure Diebold <br />
            690009 Lyons, France <br />
            10 20 30 40 50<br/>
            john.doe@gmail.com
            </p>
            <div className="d-flex gap-3">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white social-icon">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white social-icon">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="col-md-4 mb-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li><Link href="/service" className="text-white text-decoration-none">Service</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">Portfolio</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none">Me contacter</Link></li>
              <li><Link href="/mentionslegales" className="text-white text-decoration-none">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-4 mb-3">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link href="/portfolio" className="text-white text-decoration-none">Fresh Food</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">Restaurant Akira</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">Espace bien-être</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">SEO</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">Création d'une API</Link></li>
              <li><Link href="/portfolio" className="text-white text-decoration-none">Maquette d'un site</Link></li>

            </ul>
          </div>
        </div>
      </div>
    
      <style jsx>{`
        .social-icon :global(svg) {
            color: #484d52;
            transition: color 0.3s;
        }
        .social-icon:hover :global(svg) {
            color: #fff;
        }

      `}</style>
      
    </footer>
  );
}