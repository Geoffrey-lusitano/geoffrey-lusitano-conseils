import React from "react";
import "./header.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import ImageSlider from './ImageSlider'
import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'

function Header() {
  const slides = [
    {url: image1 , title: 'IMage1'},
    {url: image2 , title: 'IMage2'},
    {url: image3 , title: 'IMage3'},
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
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
          <div style={containerStyles} className="carrousel__content">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Header;
