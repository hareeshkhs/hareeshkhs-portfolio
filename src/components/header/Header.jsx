import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Mine1-bg.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__container-left">
          <h2>Hi, I'm <span>Hareesh</span></h2>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>
        <div className="header__container-right">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        </div>
      </div>
    </header>
  )
}

export default Header