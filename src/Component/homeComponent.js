import React from "react";
import "./Styles/homeStyle.css";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function Home() {
  return (
    <>
      <div className="header">
        <div className="header__title">
          <Typed
            className="h2"
            strings={[
              "Quiéres aumentar tus ventas?",
              "Quiéres aumentar tus leads?",
              "Quiéres aumentar tus ingresos?"
            ]}
            typeSpeed={70}
            backSpeed={50}
          />
          <p>Un sitio web puede ser la solución a tus problemas.</p>
          <div className="header__social">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-linkedin"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-whatsapp"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main className="base">
        <Fade left>
          <div className="title">
            <h2>Por qué necesito un sitio web?</h2>
          </div>
        </Fade>
        <div className="content">
          <Bounce left>
            <div className="content__left1">
              <h3>Tener un sitio web te brinda la oportunidad de tener:</h3>
              <ul>
                <li>
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                  Contacto constante con tus clientes
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                  Mayor profesionalidad
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                  Ampliar tu mercado
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                  Ser más competitivo
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                  Mejorar tus campañas
                </li>
              </ul>
            </div>
          </Bounce>
          <Bounce right>
            <div className="content__right">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png"
                alt=""
              />
            </div>
          </Bounce>
        </div>
        <div className="content">
          <Bounce left>
            <div className="content__left1">
              <h3>Desventajas de NO tener tu propia pagina web:</h3>
              <ul>
                <li>
                  <span role="img" aria-label="check">
                    ✖️
                  </span>
                  Pierdes una gran cantidad de clientes potenciales
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✖️
                  </span>
                  Pierdes un posible publicidad exitosa
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✖️
                  </span>
                  No puedes testear y medir a tu audiencia
                </li>
                <li>
                  <span role="img" aria-label="check">
                    ✖️
                  </span>
                  Limitas la expansión de tu negocio
                </li>
              </ul>
            </div>
          </Bounce>
          <Bounce right>
            <div className="content__right">
              <img
                src="https://img-premium.flaticon.com/png/512/159/159469.png?token=exp=1623096622~hmac=1634691ba81e6c88edbefbeb7445942f"
                alt=""
              />
            </div>
          </Bounce>
        </div>
        <div className="title">
          <h2>Cómo hago para tener mi propio sitio web?</h2>
        </div>
        <div className="next">
          <NavLink to="/about" className="btn">
            Cómo podemos ayudarte
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Home;
