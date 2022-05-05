import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(){
  return(
    <div className="headerContent">
      <div className="header">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1>{"<Johnatan />"}</h1>
          <h3 style={{width:"100%", textAlign: 'center', fontWeight: '300', fontSize: '0.8rem', letterSpacing: '4px'}}>Web Developer</h3>
          <ul className="socialMedia">
            <a className="link-social-media" target="_blank" rel="nooper noreferrer" href="https://github.com/johnatanSO/"><li className="item-social-media"><FontAwesomeIcon icon={faGithub} /></li></a>
            <a className="link-social-media" target="_blank" rel="nooper noreferrer" href="https://www.linkedin.com/in/johnatan-santos/"><li className="item-social-media"><FontAwesomeIcon icon={faLinkedin} /></li></a>
          </ul>
        </div> 
        
        <nav>
          <ul className="menuList">
            <li>Sobre</li>
            <Link duration={500} smooth={true} to="skillsContent"><li>Skills</li></Link>
            <Link duration={500} smooth={true} to="projectsContent"><li>Projetos</li></Link>
            <Link duration={500} smooth={true} to="contactContent"><li>Contato</li></Link>
          </ul>
        </nav>
      </div>

      <div className="welcomeContent">
        <h2>Olá, seja bem vindo!</h2>
        <p><b>Meu nome é Johantan,</b> sou um estudante de Análise e Desenvolvimento de Sistemas e um desenvolvedor web. Esse é o meu portfólio mostrando alguns projetos e contando um pouco sobre minha experiência como desenvolvedor.</p>
        <h3>Conheça um mais abaixo</h3>
      </div>
    </div>
  )
}


export default Header