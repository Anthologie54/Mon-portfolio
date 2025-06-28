import Header from '../components/Header';
import styles from "../styles/portfolio.module.css";

export default function Service() {
    return (
        <main>
            <Header
                title="Portfolio"
                description="Voici quelques-une de mes réalisation"
            />
            
            <div className="row justify-content-center g-4">
                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/fresh-food.jpg" className={`card-img-top ${styles.cardImgCustom}`} alt="Image d'un plat de légume frais" />
                    <div className="card-body">
                        <h2 className="card-title">Fresh Food</h2>
                        <p className="card-text">
                            Site de vente de produits frais en ligne
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Site réalisé avec PHP et MySQL
                    </div>
                </div>

                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Image d'un plat de restaurant Japonais" />
                    <div className="card-body">
                        <h2 className="card-title">Restaurant Akira</h2>
                        <p className="card-text">
                            Site de vente de produits frais en ligne.
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Site réalisé avec WordPress
                    </div>
                </div>

                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Image d'un paysant bien être" />
                    <div className="card-body">
                        <h2 className="card-title">Espace bien-être</h2>
                        <p className="card-text">
                            Site de vente de produits frais en ligne.
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Site réalisé avec LARAVEL
                    </div>
                </div>
            </div>
            <div className="row justify-content-center g-4">
                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/seo.jpg" className="card-img-top" alt="Image SEO" />
                    <div className="card-body">
                        <h2 className="card-title">SEO</h2>
                        <p className="card-text">
                            Amélioration du référencement d'un site e-commerce.
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Utilisiation des outils SEO
                    </div>
                </div>

                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/coder.jpg" className="card-img-top" alt="Plusieur ligne de code" />
                    <div className="card-body">
                        <h2 className="card-title">Création d'une API</h2>
                        <p className="card-text">
                            Création d'une API RESTFULL publique.
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        PHP - SYMFONY
                    </div>
                </div>

                <div className={`${styles.card} card`}>
                    <img src="/images-portfolio/screens.jpg" className="card-img-top" alt="Appareil éléctronique sur une table" />
                    <div className="card-body">
                        <h2 className="card-title">Maquette d'un site web</h2>
                        <p className="card-text">
                            Création d'un prototype d'un site.
                        </p>
                        <a href="#" className="btn btn-primary">Voir le site</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Réalisé avec FIGMA
                    </div>
                </div>
            </div>
        </main>
    );
}