import React from "react";
import "./about.css";
function About() {
  return (
    <section id="about">
      <div className="about__title">About</div>
      <div className="about__content">
        <h2>ENTREPRISE INFORMATIQUE À CHAMBÉRY</h2>
        <p>
          GLC est présente sur Chambéry en Savoie pour concevoir les
          projets informatiques des PME et des particuliers. En tant que prestataire de services
          informatiques, GLC vous accompagne dans la conception de votre
          système informatique en trois étapes : avant, pendant et après
          l’installation ce qui vous assure une maintenance informatique fiable
          et durable. GLC propose des prestations de qualité et
          se place en tant qu’expert en informatique. Vous cherchez à sécuriser
          votre système informatique ? Contactez notre équipe d’experts, nous
          serons ravis de vous aiguiller.
        </p>
      </div>
    </section>
  );
}

export default About;
