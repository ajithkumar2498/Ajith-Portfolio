import React from 'react'
import './intro.css'
import bg from '../../images/Ajith.png'
import { Link } from "react-scroll";
import contact_light from "../../images/contact-light.png";
import contact_dark from "../../images/contact-dark.png"
import contact from '../../images/contact.png'
import resume_light from "../../images/resume-light.png"
import resume from "../../files/Ajith Resume.pdf"
import download from "../../images/downloads.png"

function Intro() {
  return<>
 <section className='intro'>
    <div className="intro-content">
    <span className="hello">Hello</span>
    <span className="intro-text">I'm <span className="myName">Ajithkumar</span><br />MERN Developer</span>
    <p className="intro-para">Junior Full Stack  Developer</p>
    <div className="buttons">
    <a><button className="btn"><img src={contact_dark} alt="" className="btnImg" />Contact Me</button></a>
    <a href={resume} target='_blank' download="resume"><button className="btn"   ><img src={download} alt="" className="btnImg" />Resume</button></a>
    </div>
    </div>
    <img src={bg}  className='bg'/>
 </section>
  </>
}

export default Intro