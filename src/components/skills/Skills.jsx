import React from 'react'
import './skills.css'
import react from '../../images/Reactjs.png'
import express from '../../images/express.png'
import mongo from '../../images/MongoDB.png'
import node from '../../images/nodejs.png'
import htmlImg from "../../images/html.png"
import cssImg from "../../images/css.png"
import JS from "../../images/js.png"
import github from "../../images/github.png"
import bootstrap from "../../images/bootstrap.png"
function Skills() {
  return (
    <section className="Skills"> 
    <span className="skillHeader"><span className='skillbg'>SKILLS</span></span>  
    <span className="skillobj"></span>
    <div className="skillbox">
    <div className="skillBar">
      <img src={htmlImg} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">HTML</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={cssImg} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">CSS</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={JS} alt="" className="skillbarImg" />
        <div className="skillcontent">
          <h2 className="skillheader">JavaScript</h2>
        </div>
      </div>
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
      <div className="skillBar">
      <img src={github} alt="" className="skillbarImg" />
        <div className="skillcontent">
            <h2 className="skillheader">GitHub</h2>
        </div>
      </div>
      <div className="skillBar">
      <img src={bootstrap} alt="" className="skillbarImg" />
        <div className="skillcontent">
            <h2 className="skillheader">BootStrap</h2>
        </div>
      </div>
    </div>
  
    </section>
    
  )
}

export default Skills