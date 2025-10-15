import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";

export default function ContactScreen() {
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-title">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Vorresti Aggiungere un Cocktail?
              </h2>
              <h4 className="contact-subtitle">
                Il nostro team è sempre disponibile per valutare ricette e
                aggiungerle al nostro database
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form
              className="contact-form container"
              action="https://formspree.io/f/xpwykjnp"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="name"
                  className="input"
                  placeholder="Daniele"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="input"
                  placeholder="Tamarindo"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="daniele@esempio.com"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cellulare">Telefono</label>
                <input
                  type="cel"
                  id="cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555 555-5555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="ricetta">La tua ricetta</label>
                <textarea
                  type="tel"
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  placeholder="Descrivi la tua ricetta"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Invia Ricetta
              </button>
            </form>
          </div>
        </div>
      </Hero>
      <div className="contact-screen"></div>
    </>
  );
}
