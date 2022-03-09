import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contactContent">

      <div className="headerProjects">
        <div className="contactText">
          <h2>Contatos</h2>
          <p>Lorem Ipsum is simply dumetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

      <ul className="gridContact">
        <li className="todo"><img alt="github" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/><p>Github</p></li>
        <li className="apiFilms"><img alt="linkedin" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/><p>Github</p></li>
        <li className="project3"></li>
        <li className="project4"></li>
        <li className="project5"></li>
        <li className="project6"></li>
      </ul>
    </section>
  )
}

export default Contact