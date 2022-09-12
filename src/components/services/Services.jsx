import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <div className="services__title">
        <h2>NOS SERVICES</h2>
      </div>
      <div className="services__content">
        <div className="services__content__info">
          <h3>Dépannage, maintenance et installation</h3>
          <div className="services__bubble">
            <h4>Dépannage</h4>
            <ul>
              <li>Diagnostic de panne</li>
              <li>
                Désinfection (virus, malwares, spyware, chevaux de Troie...)
              </li>
              <li>Réinstallation de Windows ou Mac OS</li>
              <li>Récupération et sauvegarde de données</li>
              <li>Optimisation et boost vitesse PC et MAC</li>
            </ul>
          </div>
          <div className="services__bubble">
            <h4>Données</h4>
            <ul>
              <li>Sauvegarde de données</li>
              <li>Récupération de données perdus</li>
            </ul>
          </div>
          <div className="services__bubble">
            <h4>Assemblage</h4>
            <ul>
              <li>Montage PC (GAMING - LABO - 3D) sur-mesure</li>
              <li>Upgrade PC et MAC</li>
            </ul>
          </div>
        </div>
        <div className="services__content__dev">
          <div className="services__bubble">
            <h4>Créations</h4>
            <ul>
              <li>Site vitrine standard</li>
              <li>Site vitrine Personnalisé</li>
              <li>Site e-commerce</li>
            </ul>
          </div>
          <div className="services__bubble">
            <h4>Amélioration</h4>
            <ul>
              <li>Optimisation de votre site</li>
              <li>Référencement, SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
