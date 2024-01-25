import React from 'react'
import style from './Contacts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export function Contacts() {
  return (
    <section id="contactContainer" className={style.contactContainer}>
      <div className={style.contactText}>
        <h2>Contatos</h2>
        <p>
          Ficou alguma dúvida ou curiosidade? Entre em contato através de alguma
          das seguintes redes, e estarei pronto para te responder.
        </p>
      </div>

      <ul className={style.gridContact}>
        <li>
          <Link
            className={style.link}
            target="_blank"
            rel="nooper noreferrer"
            href="https://github.com/johnatanSO/"
          >
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
          </Link>
        </li>

        <li>
          <Link
            className={style.link}
            target="_blank"
            rel="nooper noreferrer"
            href="https://www.linkedin.com/in/johnatan-santos/"
          >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>Linkedin</span>
          </Link>
        </li>

        <li>
          <Link
            className={style.link}
            target="_blank"
            rel="nooper noreferrer"
            href="https://wa.me/5561984022596"
          >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>(61) 9 8402 - 2596</span>
          </Link>
        </li>

        <li>
          <Link
            className={style.link}
            target="_blank"
            rel="nooper noreferrer"
            href="mailto:devsantosjohn@gmail.com"
          >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>devsantosjohn@gmail.com</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
