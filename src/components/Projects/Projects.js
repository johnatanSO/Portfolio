import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <section className="projectsContent">

      <div className="headerProjects">
        <div className="projectsText">
          <h2>Projects</h2>
          <p>Lorem Ipsum is simply dumetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="projectsImage">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
        </div>
      </div>

      <ul className="gridProjects">
        <li className="project1"><button className="visitButton">Visit</button></li>
        <li className="project2"><button className="visitButton">Visit</button></li>
        <li className="project3"><button className="visitButton">Visit</button></li>
        <li className="project4"><button className="visitButton">Visit</button></li>
        <li className="project5"><button className="visitButton">Visit</button></li>
        <li className="project6"><button className="visitButton">Visit</button></li>
      </ul>
    </section>
  )
}

export default Projects