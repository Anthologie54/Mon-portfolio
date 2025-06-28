import contactStyles from "../styles/contact.module.css";
import mentionStyles from "../styles/mentionlegales.module.css";

export default function MentionsLegales() {
    return (
        <>
            <header>
                <section className={contactStyles.Service}>
                    <h1 className={contactStyles.TitleService}>Mention légales</h1>
                    <hr className={contactStyles.Trait} />
                </section>
            </header>
            <main className="container" style={{ maxWidth: "80%" }}>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={`${mentionStyles.contact} col-md-6 p-4 accordion-body`}>
                                <p><strong>John Doe</strong></p>
                                <p><i className="bi bi-map"></i>40 rue Laure Diebold</p>
                                <p><i className="bi bi-geo-alt"></i>  69009 Lyon, France</p>
                                <p><i className="bi bi-phone"></i> 10 20 30 40 50</p>
                                <p><i className="bi bi-envelope-at"></i> john.doe@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>alwaysdate</h3>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <i class="bi bi-globe"></i> <a className="text-primary text-decoration-underline"href="https://www.alwaysdata.com/fr/" target="_blank">www.alwaysdata.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédit
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>Crédits</h3>
                                <p>Ce site a été réalisé par Johne Doe, étudiant au <span className="text-primary text-decoration-underline">Centre Européen de formation</span></p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
                                     <a className="text-primary text-decoration-underline ps-1"href="https://pixabay.com/fr/" target="_blank">Pixabay</a>
                                </p>
                                <p className="fst-italic">La favicon de ce site a été fournie par 
                                    <a className="text-primary text-decoration-underline ps-1"href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John doe Icons erstellt von Freepik - Flaticon</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}