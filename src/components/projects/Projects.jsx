import React from 'react'
import './projects.css'
import task from "../../images/task-project.jpeg"
import recipe from "../../images/recipeapp.png"

function Projects() {
    const projects = [
        {
            projectname:"Recipe App",
            projectdesc:"RecepiesZone is a place where you can please your soul and tummy with delicious food recepies of all cusine. And our service is absolutely free. So Start Exploring Now",
            github:"https://github.com/ajithkumar2498/Task_tracker.git",
            netlify:"https://66463ee5eb70e21795a44a79--recipies-zone.netlify.app/home",
            image:"/src/images/recipeapp.png"
        },
        {
            projectname:"Task Tracker App",
            projectdesc:"Task Tracker is Simple Web Application to Organize & Assign the task",
            github:"https://github.com/ajithkumar2498/Task_tracker.git",
            netlify:"https://my-task-tracker-react-app.netlify.app/dashboard",
            image:"/src/images/task-project.jpeg"
        }
    ]
  return <>
  <section className="projects-div">
     <span className="Project-Title"><span className='project-bg'>Projects</span></span>  
      <div className="cards">
        {
            projects.map((pro, index)=>{
                return    <div className="card" key={index}>
                <div className="card-face front">
                    <img src={pro.image} alt="" />
                    <h3>{pro.projectname}</h3>
                </div>
                <div className="card-face back">
                    <h3>{pro.projectname}</h3>
                    <p className="project-desc">{pro.projectdesc}</p>
                    <div className="project-link">
                        <a href={pro.github} target='_blank'><i className="fa-brands fa-github source" ></i></a>
                        <a href={pro.netlify} target='_blank'><i className="fa-solid fa-link source" ></i></a>
                    </div>
                </div>
            </div>
            })
        }
     
    
    </div>
  </section>

  </>
}

export default Projects