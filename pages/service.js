import styles from "../styles/service.module.css";

export default function Service() {
  return (
    <div>
      <header> 
        <img src="/imgs/banner.jpg" alt="Banniere de pages bleu sur fond noir" width="100%"/>
        <div className={styles.Service}>
        <h1 className={styles.TitleService}>Mon offre de servcices</h1>
        <p className={styles.DescriptionService}>Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
      </header>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <div className={`${styles.serviceCard} card text-center p-3 cardHover`} style={{ width: "30rem", height: "25rem" }}>
            <i className={`${styles.icone} bi bi-brush fs-1 text-primary card-img-top`}></i>
         
          <div className="card-body">
            <h3 className="card-title">UX Desgine</h3>
            <p className="card-text">
              L'UX Design est une discipline qui consiste à concevoir des produits (sites web, application, logiciels, objets connectés, etc.)
              en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'experience utilisateur la plus fluide 
              et agréable possible
            </p>
          </div>
        </div>

        <div className={`${styles.serviceCard} card text-center p-3 cardHover`} style={{ width: "30rem", height: "25rem" }}>
          <i className={`${styles.icone} bi bi-code-slash fs-1 text-primary card-img-top`}></i>
          <div className="card-body">
            <h3 className="card-title">Développement web</h3>
            <p className="card-text">
              Le développement de sites web consiste à créer des site internet en utilisant des langages de programmation (HTML,CSS,
              JavaScript, PHP, etc..) et des frameworks (Bootstrap, React, Angular, etc..)
            </p>
          </div>
        </div>

        <div className={`${styles.serviceCard} card text-center p-3 cardHover`} style={{ width: "30rem", height: "25rem" }}>
          <i className={`${styles.icone} bi bi-search fs-1 text-primary card-img-top`}></i>
          <div className="card-body">
            <h3 className="card-title">Référencement</h3>
            <p className="card-text">
                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats 
                des moteurs de recherche (Google, Bing, Yahoo, etc..). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}