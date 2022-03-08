import React from 'react'
import './Header.css'

function Header(){
  return(
    <div className="headerContent">
      <div className="header"> 
        <h1>{"<Johnatan />"}</h1>
        <nav>
          <ul className="menuList">
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>

      <div className="welcomeContent">
        <h2>Olá, seja bem vindo!</h2>
        <p>Meu nome é Johantan, sou um desenvolvedor web e esse é o meu portfólio mostrando alguns projetos e contando um pouco sobre minha experiência como desenvolvedor.</p>
        <h3>Conheça um pouco mais abaixo</h3>
      </div>
    </div>
  )
}


export default Header