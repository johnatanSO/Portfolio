import React from 'react'
import style from './Contacts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Contacts() {
  return (
    <section className={style.contactContainer}>
      <div className={style.contactText}>
        <h2>Contatos</h2>
        <p>
          Ficou alguma dúvida ou curiosidade? Entre em contato através de alguma
          das seguintes redes, e estarei pronto para te atender.
        </p>
      </div>

      <ul className={style.gridContact}>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkedin</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>(61) 9 8402-2596</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>devsantosjohn@gmail.com</span>
        </li>
      </ul>
    </section>
  )
}
