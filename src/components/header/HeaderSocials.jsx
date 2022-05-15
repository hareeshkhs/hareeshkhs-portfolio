import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
/* import { FiDribbble } from 'react-icons/fi' */
import { BsArrowDownCircle } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chintha-hareesh-kumar-441356191/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hareeshkhs" target="_blank"><FaGithub/></a>
        {/* <a href="https://dribbble.com" target="_blank"><FiDribbble/></a> */}
        <a href="#contact" className='scroll__down'><BsArrowDownCircle /></a>
    </div>
  )
}

export default HeaderSocials