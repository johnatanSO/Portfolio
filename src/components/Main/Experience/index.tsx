import Image from 'next/image'
import React from 'react'
import style from './Experience.module.scss'
import experienceImage from '../../../../public/assets/images/experience.svg'

export function Experience() {
  return (
    <section id="experienceContainer" className={style.experienceContainer}>
      <div data-aos="fade-left" className={style.experienceText}>
        <h2>Experiências</h2>
        <ul>
          <li>
            <h4 style={{ fontSize: '1.5rem' }}>
              <b>Desenvolvedor Full Stack Júnior</b> - VENDERGÁS Soluções em
              tecnologia
            </h4>
            <span>(01/12/2022 - Atualidade)</span>
            <p>
              - Participação integral no desenvolvimento de um sistema ERP,
              <br /> o Gestor{' '}
              <b>
                <a
                  target="_blank"
                  href="https://gestor.vendergas.com.br"
                  rel="noreferrer"
                >
                  (https://gestor.vendergas.com.br)
                </a>
              </b>
              , destinado à comércios em geral, com funcionalidades de
              lançamento de vendas, controle de contas e despesas, estoques de
              produtos, emissão de notas fiscais e etc. Participei ativamente de
              todas as etapas, desde o planejamento do sistema, construção da
              interface com Figma, desenvolvimento das páginas e das
              funcionalidades no <b>back-end</b> e no <b>front-end</b>, até a
              implementação. Utilizei tecnologias avançadas como:{' '}
              <b>
                NextJS/React, ContextAPI, WebSockets, Typescript, Javascript,
                SASS, NodeJS, Express, MongoDB,
              </b>{' '}
              testes unitários com <b>Jest</b>, práticas de{' '}
              <b>CI/CD, Clean Code, SOLID</b> e versionamento de código com{' '}
              <b>GIT/GITHUB</b> com modelo <b>GIT FLOW</b>;
            </p>
            <p>
              {' '}
              - Adicionalmente, mantive meu papel no desenvolvimento contínuo e
              melhorias do sistema Vendergás, embora com menor ênfase.
            </p>
            <p>
              - Desenvolvi um <b>CHATBOT</b> para a empresa, chamado MAIA,
              integrado com os dois sistemas ERP, que faz o envio de mensagem
              automáticas para o whatsapp de clientes quando um pedido é
              finalizado no sistema, utilizando as tecnologias{' '}
              <b>Electron, HTML, CSS, Javascript, WebSockets, Axios, JEST</b>{' '}
              para testes unitários, integração com uma <b>API do whatsapp</b> e
              controle de versão com <b>GIT e Github.</b>
            </p>
          </li>
          <li>
            <h4 style={{ fontSize: '1.5rem' }}>
              <b>Estágio</b> - VENDERGÁS Soluções em tecnologia
            </h4>
            <span>(01/06/2022 - 30/11/2022)</span>
            <p>
              - Contribuí ativamente para o sistema ERP Vendergás:{' '}
              <b>
                <a
                  target="_blank"
                  href="https://vendergas.com.br/"
                  rel="noreferrer"
                >
                  (https://vendergas.com.br/)
                </a>
              </b>
              , destinado à gestão de revendas de Gás e Água em todo o Brasil.
              Desenvolvendo novas funcionalidades, criando e integrando rotas na
              API, planejamento e criação de novas páginas e resolvendo
              problemas do sistema. Minhas responsabilidades envolveram tanto o
              front-end como o back-end, com o foco em tecnologias como:{' '}
              <b>
                AngularJS, Typescript, Javascript, SASS, NodeJS, Express e
                MongoDB
              </b>{' '}
              e fazendo o versionamento de todo o código utilizando{' '}
              <b>GIT/GITHUB</b> com modelo <b>GIT FLOW.</b>
            </p>
          </li>
        </ul>
      </div>
      <div className={style.experienceImage}>
        <Image
          className={style.experienceImage}
          src={experienceImage}
          width={240}
          height={300}
          alt="Background image experience"
        />
      </div>
    </section>
  )
}
