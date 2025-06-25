import Head from "next/head";
import styles from "/styles/Home.module.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Profil Github</h1>
                <button
                  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {userData ? (
                  <>
                    <img src={userData.avatar_url} alt="avatar" className="img-thumbnail mb-3" width="100" />

                    <p><strong>Nom d'utilisateur :</strong> {userData.login}</p>
                    <p><strong>Bio :</strong> {userData.bio || "Aucune bio disponible"}</p>
                    <p><strong>Repos publics :</strong> {userData.public_repos}</p>
                    <p><strong>Followers :</strong> {userData.followers}</p>
                    <a href={userData.html_url} target="_blank" rel="noreferrer"> Voir le profil complet</a>
                  </>
                ) : (
                  <div className="d-flex align-items-center">
                    <strong className="me-2">Chargement...</strong>
                    <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.articles}>
        <section>
          <h3 className={styles.SousTitle}>A propos</h3>
        </section>
        <section>
          <h3 className={styles.SousTitle}>Mes compétence</h3>
        </section>
      </main>

      <footer>
        <section>

        </section>
      </footer>
    </>
  )
}
