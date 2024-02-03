import React from 'react'
import './projects.css'
import task from "../../images/task-project.jpeg"
function Projects() {
  return <>
  <section className="projects">
 <h2 className="projects-Title">Projects</h2>
 <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={task}/>
                <div class="box-content">
                    <h3 class="title">Williamson</h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={task}/>
                <div class="box-content">
                    <h3 class="title">Miranda Roy</h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    
  </section>

  </>
}

export default Projects