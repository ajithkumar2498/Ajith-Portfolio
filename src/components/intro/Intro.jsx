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
  let openresume=()=>{
    window.open(resume)
  }
  return<>
 <section className='intro'>
    <div className="intro-content">
    <span className="hello">Hello</span>
    <span className="intro-text">I'm <span className="myName">Ajithkumar</span><br />Full Stack Developer</span>
    <p className="intro-para">I am a Skilled, Enthusiastic and dedicated Junior MERN Full Stack Developer with a strong foundation in web development technologies. Eager to leverage skills in MongoDB, Express.js, React, and Node.js to contribute to dynamic projects and gain hands-on experience in building responsive and user-friendly web applications. </p>
    <div className="buttons">
    <a ><button className="btn"  class="btn btn-danger" onClick={()=>openresume()}><img src={contact_dark} alt="" className="btnImg" />View Resume</button></a>
    <a href={resume} target='_blank' download="resume"><button className="btn"   ><img src={download} alt="" className="btnImg" />Resume</button></a>
    </div>
    </div>
    <img src={bg}  className='bg'/>
 </section>
  </>
}

export default Intro