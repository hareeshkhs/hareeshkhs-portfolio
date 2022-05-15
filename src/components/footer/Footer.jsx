import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>CHINTHA HAREESH KUMAR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chintha-hareesh-kumar-441356191/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hareeshkhs" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/hareesh.chinthakhs/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/hareeshkhs/" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/hareeshkhs" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>Made with <AiFillHeart className="heart"/> from Hareeshkhs{/* &copy; HAREESHKHS. All right reserved. */}</small>
      </div>
    </footer>
  )
}

export default Footer