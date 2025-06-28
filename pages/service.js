import styles from "../styles/service.module.css";

export default function Service() {
    return (
        <>
            <header>
                <img src="/imgs/banner.jpg" alt="Bannière de pages bleu sur fond noir" width="100%" />
                <section className={styles.Service}>
                    <h1 className={styles.TitleService}>Mon offre de services</h1>
                    <p className={styles.DescriptionService}>
                        Voici les prestations sur lesquelles je peux intervenir
                    </p>
                </section>
            </header>
            <main>
            <section className="container" aria-label="Liste des services">
                <div className="row justify-content-center g-4">
                    {/* UX Design */}
                    <article className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className={`card text-center p-3 ${styles.serviceCard} w-100 h-100 d-flex flex-column`}>
                            <i className={`${styles.icone} bi bi-brush fs-1 text-primary card-img-top`}></i>
                            <div className="card-body flex-grow-1 d-flex flex-column">
                                <h3 className="card-title">UX Design</h3>
                                <p className="card-text">
                                    L'UX Design est une discipline qui consiste à concevoir des
                                    produits (sites web, application, logiciels, objets
                                    connectés, etc.) en plaçant l'utilisateur au centre des
                                    préoccupations. L'objectif est de rendre l'expérience
                                    utilisateur la plus fluide et agréable possible.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Développement Web */}
                    <article className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className={`card text-center p-3 ${styles.serviceCard} w-100 h-100 d-flex flex-column`}>
                            <i className={`${styles.icone} bi bi-code-slash fs-1 text-primary card-img-top`}></i>
                            <div className="card-body flex-grow-1 d-flex flex-column">
                                <h3 className="card-title">Développement web</h3>
                                <p className="card-text">
                                    Le développement de sites web consiste à créer des sites
                                    internet en utilisant des langages de programmation (HTML,
                                    CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                                    React, Angular, etc.).
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Référencement */}
                    <article className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className={`card text-center p-3 ${styles.serviceCard} w-100 h-100 d-flex flex-column`}>
                            <i className={`${styles.icone} bi bi-search fs-1 text-primary card-img-top`}></i>
                            <div className="card-body flex-grow-1 d-flex flex-column">
                                <h3 className="card-title">Référencement</h3>
                                <p className="card-text">
                                    Le référencement naturel (SEO) est une technique qui consiste
                                    à optimiser un site web pour le faire remonter dans les
                                    résultats des moteurs de recherche (Google, Bing, Yahoo,
                                    etc.). L'objectif est d'attirer un maximum de visiteurs
                                    qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    </>
    );
}