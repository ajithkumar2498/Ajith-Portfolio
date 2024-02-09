import React from 'react'
import './projects.css'
import task from "../../images/task-project.jpeg"

function Projects() {
  return <>
  <section className="projects-div">
     <span className="Project-Title"><span className='project-bg'>Projects</span></span>  
      <div className="cards">
        <div className="card">
            <div className="card-face front">
                <img src={task} alt="" />
                <h3>Task Tracker App</h3>
            </div>
            <div className="card-face back">
                <h3>Task Tracker App</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, error quisquam laborum quam </p>
                <div className="project-link">
                    <a href="https://github.com/ajithkumar2498/Task_tracker.git" target='_blank'><i className="fa-brands fa-github source" ></i></a>
                    <a href="https://my-task-tracker-react-app.netlify.app/dashboard" target='_blank'><i className="fa-solid fa-link source" ></i></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-face front">
                <img src={task} alt="" />
                <h3>Task Tracker App</h3>
            </div>
            <div className="card-face back">
                <h3>Task Tracker App</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, error quisquam laborum quam </p>
                <div className="project-link">
                    <a href="https://github.com/ajithkumar2498/Task_tracker.git" target='_blank'><i className="fa-brands fa-github source" ></i></a>
                    <a href="https://my-task-tracker-react-app.netlify.app/dashboard" target='_blank'><i className="fa-solid fa-link source" ></i></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-face front">
                <img src={task} alt="" />
                <h3>Task Tracker App</h3>
            </div>
            <div className="card-face back">
                <h3>Task Tracker App</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, error quisquam laborum quam </p>
                <div className="project-link">
                    <a href="https://github.com/ajithkumar2498/Task_tracker.git" target='_blank'><i className="fa-brands fa-github source" ></i></a>
                    <a href="https://my-task-tracker-react-app.netlify.app/dashboard" target='_blank'><i className="fa-solid fa-link source" ></i></a>
                </div>
            </div>
        </div>
    </div>
  </section>

  </>
}

export default Projects