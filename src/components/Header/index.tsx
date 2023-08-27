import React from 'react'
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'

export function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.header}>
        <div className={style.logo}>
          <h1>{'<Johnatan />'}</h1>
          <h3
            style={{
              fontWeight: '300',
              fontSize: '0.8rem',
              letterSpacing: '4px',
            }}
          >
            Web Developer
          </h3>
          <ul className={style.socialMediaList}>
            <li>
              <a
                target="_blank"
                rel="nooper noreferrer"
                href="https://github.com/johnatanSO/"
              >
                <FontAwesomeIcon
                  className={style.socialMediaIcon}
                  icon={faGithub}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="nooper noreferrer"
                href="https://www.linkedin.com/in/johnatan-santos/"
              >
                <FontAwesomeIcon
                  className={style.socialMediaIcon}
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>

        <nav>
          <ul className={style.menuList}>
            <li>Sobre</li>
            <Link
              duration={500}
              smooth={true}
              to="skillsContainer"
              offset={-50}
              spy={true}
            >
              <li>Skills</li>
            </Link>
            <Link
              duration={500}
              smooth={true}
              to="experienceContainer"
              offset={-50}
              spy={true}
            >
              <li>Experiências</li>
            </Link>
            <Link
              duration={500}
              smooth={true}
              to="projectsContainer"
              offset={-50}
              spy={true}
            >
              <li>Projetos</li>
            </Link>
            <Link
              duration={500}
              smooth={true}
              to="contactContainer"
              offset={-50}
              spy={true}
            >
              <li>Contato</li>
            </Link>
          </ul>
        </nav>
      </div>

      <div className={style.welcomeContent}>
        <h2>Olá, seja bem vindo!</h2>
        <p>
          <b>Meu nome é Johnatan,</b> sou um Desenvolvedor Web Full Stack. Com
          uma formação Análise e Desenvolvimento de Sistemas e cerca de dois
          anos de experiência, tenho uma paixão por tecnologia e venho buscando
          evoluir cada vez mais participando sempre de projetos desafiadores e
          aplicações completas e de alta qualidade.
        </p>
        <p style={{ marginTop: '20px' }}>
          E esse é o meu portfólio mostrando alguns projetos e contando um pouco
          sobre minha trajetória como desenvolvedor.
        </p>
        <h3>Conheça um pouco mais abaixo</h3>
      </div>
    </div>
  )
}
