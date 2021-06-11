import React from "react";
import "./Styles/contactStyle.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="heading">
          <h2>Contacto</h2>
          <div className="contacto-bg"></div>
          <p>
            A continuación puedes contactarnos, o consultar un presupuesto sin
            compromiso
          </p>
        </div>

        <div className="contentform">
          <div className="formBx">
            <form
              action="https://gmail.us7.list-manage.com/subscribe/post?u=6e2a895c3e89a2f12a8b8136f&amp;id=dc28cab983"
              method="post"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
              id="form"
            >
              <input
                type="text"
                placeholder="Nombre"
                name="FNAME"
                className="required"
                id="mce-FNAME"
              />
              <input
                type="email"
                name="EMAIL"
                placeholder="Email"
                id="mce-EMAIL"
                className="required email"
              />
              <textarea
                placeholder="Su mensaje"
                name="MMERGE2"
                id="mce-MMERGE2"
              ></textarea>
              <input
                type="submit"
                name="suscribe"
                value="Enviar"
                id="mc-embedded-suscribe"
                className="button"
              />

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
