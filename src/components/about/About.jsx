import React from 'react'
import './about.css'
import ME from '../../assets/Mine2.5.png'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>ASE Intern at Innovaccer Analytics Pvt Ltd</small>
            </article>
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Graduation</h5>
              <small>B.Tech(CSE) from Chandigarh University</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p className="about__para">
          I am an ambitious, hardworking individual, with broad skills in the field of FullStack Development. I Believe in myself, am Passionate about development and making things in a better way, and am always interested in a challenge.<br />
Currently, I am working as an Associate Software Engineer Intern at Innovaccer Analytics Pvt Ltd and completed Training on FullStack Technologies.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About