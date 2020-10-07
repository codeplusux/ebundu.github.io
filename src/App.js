import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppleBadge from "./i/appleBadge.png";
import AndroidBadge from "./i/androidBadge.png";
import Phone from "./i/phone.png";
import Neighborhood from "./i/neighborhood.png";

function App() {
  return (
    <div id="main">
      <div id="neighborhood">
        <img src={Neighborhood} alt="App store" class="img-fluid" />
      </div>
      <div id="content">
        <div className="mainInfo">
          <div className="detail">
            <div className="brand">
              <div className="float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78">
                  <path
                    d="M 58.874 77.678 L 19.126 77.678 C 8.741 77.678 0.322 69.259 0.322 58.874 L 0.322 19.126 C 0.322 8.741 8.741 0.322 19.126 0.322 L 58.874 0.322 C 69.259 0.322 77.678 8.741 77.678 19.126 L 77.678 58.874 C 77.678 69.259 69.259 77.678 58.874 77.678 Z"
                    fill="hsl(0, 0%, 100%)"
                  ></path>
                  <path
                    d="M 22.53 37.066 C 14.13 37.066 7.323 30.259 7.323 21.859 C 7.323 13.46 14.13 6.653 22.53 6.653 C 30.929 6.653 37.737 13.46 37.737 21.859 C 37.73 30.259 30.923 37.066 22.53 37.066 Z"
                    fill="rgb(230,149,86)"
                  ></path>
                  <path
                    d="M 55.934 37.066 C 47.535 37.066 40.728 30.259 40.728 21.859 C 40.728 13.46 47.535 6.653 55.934 6.653 C 64.334 6.653 71.141 13.46 71.141 21.859 C 71.141 30.259 64.334 37.066 55.934 37.066 Z"
                    fill="rgb(110,73,227)"
                  ></path>
                  <path
                    d="M 55.934 72.153 C 47.535 72.153 40.728 65.346 40.728 56.946 C 40.728 48.547 47.535 41.74 55.934 41.74 C 64.334 41.74 71.141 48.547 71.141 56.946 C 71.141 65.346 64.334 72.153 55.934 72.153 Z"
                    fill="rgb(69,201,137)"
                  ></path>
                  <path
                    d="M 35.145 57.507 L 13.679 57.507 C 13.827 60.202 14.736 62.368 16.399 63.999 C 18.062 65.63 20.041 66.448 22.349 66.448 C 26.269 66.448 29.266 64.514 31.329 60.653 L 34.475 62.271 C 33.069 64.875 31.406 66.796 29.492 68.04 C 27.577 69.285 25.282 69.903 22.62 69.903 C 18.939 69.903 15.897 68.64 13.505 66.107 C 11.107 63.58 9.914 60.531 9.914 56.966 C 9.914 53.401 11.12 50.352 13.531 47.806 C 15.942 45.259 18.926 43.989 22.491 43.989 C 26.056 43.989 29.034 45.195 31.426 47.606 C 33.817 50.017 35.055 53.317 35.145 57.507 Z M 31.013 54.233 C 30.562 52.138 29.543 50.507 27.958 49.34 C 26.372 48.173 24.547 47.586 22.478 47.586 C 18.288 47.586 15.503 49.804 14.124 54.233 Z"
                    fill="rgb(110,73,227)"
                  ></path>
                </svg>
              </div>
              <div className="float-right">
                <h1>ebundu</h1>
                <p className="tagline">Mejor comunidad</p>
                <p className="beta">beta</p>
              </div>
            </div>
            <h2 className="invite">
              Una mejor comunidad la hacemos entre tod@s. Súmate y participa con
              los vecinos de tu barrio.
            </h2>
            <p className="instructions">
              Descarga desde tu tienda favorita y crea tu cuenta. Envíanos tus
              dudas y sugerencias.
            </p>
            <ul className="stores">
              <li>
                <a
                  href="https://apps.apple.com/cl/app/ebundu/id1525399985?l=en"
                  title="Descarga desde App store"
                  target="blank"
                >
                  <img src={AppleBadge} alt="App store" class="img-fluid" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ebundu.ebundu_resident"
                  title="Descarga desde App store"
                  target="blank"
                >
                  <img
                    src={AndroidBadge}
                    alt="Descarga desde Play store"
                    class="img-fluid"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="phone">
            <div>
              <img src={Phone} alt="App store" class="img-fluid" />
            </div>
          </div>
        </div>
        {/*<div className="generalInfo">Conoce más de nosotros</div>*/}
      </div>
    </div>
  );
}

export default App;
