import React from 'react'
import './skills.css'
import react from '../../images/Reactjs.png'
import express from '../../images/express.png'
import mongo from '../../images/MongoDB.png'
import node from '../../images/nodejs.png'

function Skills() {
  return (
    <section className="Skills"> 
    <span className="skillHeader"><span className='skillbg'>SKILLS</span></span>  
    <span className="skillobj">I am a Skilled, Enthusiastic and dedicated Junior MERN Stack Developer with a strong foundation in web development technologies. Eager to leverage skills in MongoDB, Express.js, React, and Node.js to contribute to dynamic projects and gain hands-on experience in building responsive and user-friendly web applications. Possesses a solid understanding of front-end and back-end principles, coupled with a passion for continuous learning and growth within a collaborative team environment</span>
    <div className="skillbox">
      <div className="skillBar">
      <img src={react} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">React</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={mongo} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">Mongo DB</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={express} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">Express JS</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={node} alt="" className="skillbarImg" />
        <div className="skillcontent">
            <h2 className="skillheader">Node JS</h2>
        </div>
      </div>
    </div>
    
    </section>
    
  )
}

export default Skills