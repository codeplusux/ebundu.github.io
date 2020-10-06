import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppleBadge from "./i/appleBadge.png";
import AndroidBadge from "./i/androidBadge.png";
// import Phone from "./i/phone.png";

function App() {
  return (
    <div id="main">
      <div id="neighborhood"></div>
      <div id="content">
        <div className="mainInfo">
          <div className="detail">
            <div className="brand">
              <h1>
                ebundu <span>Mejor comunidad</span> <span>Beta</span>
              </h1>
            </div>
            <h2>Comparte actualizaciones con l@s vecin@s de tu comunidad.</h2>
            <p>Descarga ya la aplicación desde tu tienda favorita.</p>
            <ul>
              <li>
                <a
                  href="https://apps.apple.com/cl/app/ebundu/id1525399985?l=en"
                  title="Descarga desde App store"
                  target="blank"
                >
                  <img src={AppleBadge} alt="App store" />
                </a>
              </li>
              <a
                href="https://play.google.com/store/apps/details?id=com.ebundu.ebundu_resident"
                title="Descarga desde App store"
                target="blank"
              >
                <img src={AndroidBadge} alt="Descarga desde Play store" />
              </a>
            </ul>
          </div>
          <div className="phone"></div>
        </div>
        <div className="generalInfo">Conoce más de nosotros</div>
      </div>
    </div>
  );
}

export default App;
