import Head from "next/head";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "/styles/Home.module.css";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-johndoe")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Erreur API GitHub :", err));
  }, []);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => console.log("✅ Bootstrap JS chargé"))
      .catch((err) => console.error("Erreur Bootstrap :", err));
  }, []);

  return (
    <>
      <Head>
        <title>Porfolio John Doe</title>
        <meta name="description" content="Création d'un portfolio pour un dévelloppeur WEB et WEB Mobil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.hero}>

          <h1> Bonjour je suis John Doe</h1>
          <h2>Développeur Web full stack</h2>

          <button type="button" className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#githubModal" >En savoir plus</button>
        </div>
        {/* Modal GitHub */}
        <div className="modal fade" id="githubModal" tabIndex="-1" aria-labelledby="githubModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-secondary">
                <h1 className="modal-title" id="githubModalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fermer"></button>
              </div>

              <div className="modal-body d-flex gap-4">
                <img src="https://avatars.githubusercontent.com/u/9919?v=4" alt="avatar GitHub" className="img-thumbnail" width="300" style={{ flexShrink: 0 }} />

                <div className="d-flex flex-column justify-content-start">
                  <p>
                    <i className="bi bi-person me-2"></i>
                    <a href="https://github.com/github-johndoe" className="text-primary text-decoration-underline" target="_blank" rel="noreferrer">John Doe</a>
                  </p>
                  <hr className="border-secondary" />

                  <p>
                    <i className="bi bi-geo-alt me-2"></i>
                    Aucune localisation
                  </p>
                  <hr className="border-secondary" />

                  <p>
                    <i className="bi bi-card-text me-2"></i>
                    As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.
                  </p>
                  <hr className="border-secondary" />

                  <p>
                    <i className="bi bi-box me-2"></i>
                    Repositories : 1
                  </p>
                  <hr className="border-secondary" />

                  <p>
                    <i className="bi bi-people me-2"></i>
                    Followers : 16
                  </p>
                  <hr className="border-secondary" />

                  <p>
                    <i className="bi bi-person-check me-2"></i>
                    Following : 0
                  </p>
                </div>
              </div>

              <div className="modal-footer bg-dark text-white">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.articles}>
        <section>

          <h3 className={styles.SousTitle}>A propos</h3>

          <img src=" /imgs/john-doe-about.jpg" alt="John Doe qui travaille" className="img-fluid object-fit-cover w-100" />

          <p className={styles.TextDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <section className={styles.competence}>

          <h3 className={styles.SousTitle}>Mes compétence</h3>

          <label className={styles.label}>HTML5 90%</label>
          <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-danger marge-progess-bar" style={{ width: '90%' }}></div>
          </div>

          <label className={styles.label}>CSS 80%</label>
          <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
          </div>

          <label className={styles.label}>Javascript 70%</label>
          <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
          </div>

          <label className={styles.label}>PHP 60%</label>
          <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
          </div>

          <label className={styles.label}>REACT 50%</label>
          <div className="progress" role="progressbar" aria-label="Primary example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
          </div>

        </section>
      </main>

      <footer>
        <section>

        </section>
      </footer>
    </>
  )
}
