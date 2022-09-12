import React from "react";
import "./about.css";
function About() {
  return (
    <section id="about">
      <div className="about__title">
        <h1>GLC</h1>
        <h2>ENTREPRISE INFORMATIQUE À CHAMBÉRY</h2>
      </div>
      <div className="about__content">
        <div className="about__content__bubble">
          <h3>Notre histoire</h3>
          <p>
            GLC est présente sur Chambéry en Savoie pour concevoir les projets
            informatiques des PME et des particuliers. En tant que prestataire
            de services informatiques, GLC vous accompagne dans la conception de
            votre système informatique. GLC propose des prestations de qualité
            et se place en tant qu’expert en informatique.
          </p>
        </div>
        <div className="about__content__bubble">
          <h3>Notre expertise</h3>
          <p>
            GlC vous accompagne dans différents projets aussi bien pour les :
            <br />
            <br />
            <ul>
              <li>
                PME : expliquez nous votre besoin nous vous proposerons une
                solution adapté à vos besoins
              </li>
              <br />
              <li>
                Particuliers : une oreille attentive qui prendra le temps de
                répondre à vos questions
              </li>
            </ul>
          </p>
        </div>
        <div className="about__content__bubble">
          <h3>Notre objectif</h3>
          <p>
            Nous souhaitons avant tous apporté une solution optimale et durable a nos clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
