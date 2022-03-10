import React from 'react'
import './Header.css'

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
          <h3 style={{ fontWeight: '300', fontSize: '0.8rem', letterSpacing: '4px'}}>Web Developer</h3>
        </div> 
        
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
        <p><b>Meu nome é Johantan,</b> sou um desenvolvedor web e esse é o meu portfólio mostrando alguns projetos e contando um pouco sobre minha experiência como desenvolvedor.</p>
        <h3>Conheça um pouco mais abaixo</h3>
      </div>
    </div>
  )
}


export default Header