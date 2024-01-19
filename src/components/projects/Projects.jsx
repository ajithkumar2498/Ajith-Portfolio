import React from 'react'
import './projects.css'
import task from "../../images/task-project.jpeg"
function Projects() {
  return <>
  <section className="projects">
 <h2 className="projects-Title">Projects</h2>
  <div className="projects-div">
    <figure class="snip1567">
      <img src={task} alt="sample88" />
      <figcaption>
        <h3>Task Tracker</h3>
      </figcaption>
      <div class="hover"></div><i class="fa-solid fa-arrow-up-right-from-square"></i>
      <a href="#"></a>
    </figure>
    {/* <figure class="snip1567"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample96.jpg" alt="sample96" />
      <figcaption>
        <h3>Online Marketing</h3>
        <p>The only skills I have the patience to learn are those that have no real application in life. </p>
      </figcaption>
      <div class="hover"></div><i class="ion-android-add"></i>
      <a href="#"></a>
    </figure> */}
    </div>
  </section>

  </>
}

export default Projects