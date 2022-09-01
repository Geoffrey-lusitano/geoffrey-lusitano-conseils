import React from "react";
import "./header.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import ImageSlider from './ImageSlider'

function Header() {
  const slides = [
    {title: 'IMage1'},
    {title: 'IMage2'},
    {title: 'IMage3'},
  ]
  return (
    <section id="home">
      <div className="header__content">
        Home
        <div className="header__socials">
          <a href="https://www.linkedin.com/in/geo-lusi/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/geo-lusi/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://github.com/Geoffrey-lusitano" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="header__carousel">
          <div className="carousel__title">
            <h1>Nos dernieres créations</h1>
          </div>
          <div className="carrousel__content">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Header;
