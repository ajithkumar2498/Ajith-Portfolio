import React from 'react'
import './about.css'
import college from "../../images/college.jpg"
function About() {
  return<>
  <section className='about-div'>
    <span className="About-Title"><span className='about-bg'>About Me</span></span>  
    <div className="about-container">
       <div className="edu1">
         <img src={college} className='edu1Image' alt="" />
         <p className="content">
            Lorem, ipsum dolor sit amet consectetur  accusamus velit ad quas quam soluta. Repudiandae reiciendis explicabo velit!         </p>
       </div>
       <div className="edu2">
       <img src={college} className='edu1Image' alt="" />
       <p className="content">
       Lorem, ipsum dolor sit amet consectetur  accusamus velit ad quas quam soluta. Repudiandae reiciendis explicabo velit!   
          </p>

       </div>
       <div className="edu3">
       <img src={college} className='edu1Image' alt="" />
       <p className="content">
       Lorem, ipsum dolor sit amet consectetur  accusamus velit ad quas quam soluta. Repudiandae reiciendis explicabo velit!   
          </p>

       </div>
    </div>
    
  </section>
  </>
}

export default About