import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section  className="contactContent">

      <div className="headerProjects">
        <div className="contactText">
          <h2>Contatos</h2>
          <p>Ficou alguma dúvida ou curiosidade? Entre em contato através de alguma das seguintes redes, e estarei pronto para te atender.</p>
          
        </div>
      </div>

      <ul className="gridContact">
        <li className="todo"><img alt="github" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/><p>Github</p></li>

        <li className="apiFilms"><img alt="linkedin" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-plain.svg"/><p>Linkedin</p></li>

        <li className="project3"><img alt="call" src="./assets/icons/whatsapp.png"/><p>(61) 9 8402-2596</p></li>

        <li className="project4"><img alt="email" src="./assets/icons/email.png"/><p>devsantosjohn@gmail.com</p></li>

        
      </ul>
    </section>
  )
}

export default Contact