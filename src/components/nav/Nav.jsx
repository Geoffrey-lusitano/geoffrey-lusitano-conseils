import React from 'react'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className="navbar">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>  

                    <div className="menu-items">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>ACCUEIL  </a>
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>À PROPOS </a>
                        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>SERVICES </a>
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>CONTACT </a>
                    </div>
                    <div className="logo">
                        <h1>GLC</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
  }



export default Nav