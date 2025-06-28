import styles from "../styles/contact.module.css";

export default function Contact() {
    return (
        <>
            <header>
                <section className={styles.Service}>
                    <h1 className={styles.TitleService}>Contact</h1>
                    <p className={styles.DescriptionService}>
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact
                    </p>
                    <hr className={styles.Trait} />
                </section>
            </header>

            <main className={styles.main}>
                {/***Formulaire de contact***/}
                <div className="row shadow rounded bg-white">
                    <div className="col-md-6 p-4">
                        <h2 className={styles.titleSecond}>Formulaire de contact</h2>
                        <form>
                            {[
                                { type: "text", placeholder: "Votre nom" },
                                { type: "email", placeholder: "Votre adresse email" },
                                { type: "tel", placeholder: "Votre numéro de téléphone" },
                                { type: "text", placeholder: "Sujet" }
                            ].map((field, index) => (
                                <div className="mb-3" key={index}>
                                    <input type={field.type} className="form-control" placeholder={field.placeholder} />
                                </div>
                            ))}

                            <div className="mb-3">
                                <textarea className="form-control" rows="15" placeholder="Votre message"></textarea>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    {/****Mes Coordonnees****/}
                    <div className={`${styles.contact} col-md-6 p-4`}>
                        <h2 className={styles.titleSecond}>Mes coordonnées</h2>
                        <p><strong>John Doe</strong></p>
                        <p><i className="bi bi-geo-alt"></i> 40 rue Laure Diebold<br />69009 Lyon, France</p>
                        <p><i className="bi bi-telephone"></i> 10 20 30 40 50</p>
                        <p><i className="bi bi-envelope"></i> john.doe@gmail.com</p>

                        <div className="ratio ratio-4x3">
                            <iframe
                                src="https://www.google.com/maps?q=40 Rue Laure Diebold, 69009 Lyon, France&output=embed" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
