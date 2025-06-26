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
      <body>
        <header>
          <div className={styles.hero}>

            <h1> Bonjour je suis John Doe</h1>
            <h2>Développeur Web full stack</h2>

            <button type="button" class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" >En savoir plus</button>
          </div>
          {/* Modal pour le bouton */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Profil Github</h1>
                  <button
                    type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                  {userData ? (
                    <>
                      <img src={userData.avatar_url} alt="avatar" class="img-thumbnail mb-3" width="100" />

                      <p><strong>Nom d'utilisateur :</strong> {userData.login}</p>
                      <p><strong>Bio :</strong> {userData.bio || "Aucune bio disponible"}</p>
                      <p><strong>Repos publics :</strong> {userData.public_repos}</p>
                      <p><strong>Followers :</strong> {userData.followers}</p>
                      <a href={userData.html_url} target="_blank" rel="noreferrer"> Voir le profil complet</a>
                    </>
                  ) : (
                    <div class="d-flex align-items-center">
                      <strong class="me-2">Chargement...</strong>
                      <div class="spinner-border text-primary" role="status" aria-hidden="true"></div>
                    </div>
                  )}
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={styles.articles}>
          <section>

            <h3 className={styles.SousTitle}>A propos</h3>

            <img className={styles.ImageJohneDoe} src=" /imgs/john-doe-about.jpg" alt="John Doe qui travaille" with="200px" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </body>
    </>
  )
}
