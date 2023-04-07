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
            <span>( 01/12/2022 até atualmente )</span>
            <p>
              - Trabalhando no <b>front-end</b> e no <b>back-end</b>{' '}
              desenvolvendo novas features, criando e integrando novas rotas na
              API, desenvolvendo novas páginas, e realizando manutenção em um
              sistema ERP ( sistema para gestão empresarial focado em revendas
              de Gás e Água, que é distribuído para todo o Brasil ), utilizando
              as tecnologias: <b>Angular, Node e MongoDB,</b> e fazendo o
              versionamento de todo o código utilizando <b>GIT</b> com modelo{' '}
              <b>GIT FLOW.</b>
            </p>
            <p>
              - Desenvolvendo um microsserviço focado na área financeira desse
              sistema ERP, participando de todas as etapas, desde o
              planejamento, construção da interface com Figma, desenvolvimento
              das páginas e funcionalidades no back e no front, até o deploy,
              utilizando as tecnologias:{' '}
              <b>ReactJS, NextJS, Typescript, MongoDB, SASS,</b> práticas de{' '}
              <b>CI/CD</b> e versionamento de código com <b>GIT</b> com modelo{' '}
              <b>GIT FLOW</b>.
            </p>
          </li>
          <li>
            <h4 style={{ fontSize: '1.5rem' }}>
              <b>Estágio</b> - VENDERGÁS Soluções em tecnologia
            </h4>
            <span>( 01/06/2022 até 30/11/2022 )</span>
            <p>
              - Trabalhando no <b>front-end</b> e no <b>back-end</b>{' '}
              desenvolvendo novas features, criando e integrando novas rotas na
              API, desenvolvendo novas páginas, e realizando manutenção em um
              sistema ERP ( sistema para gestão empresarial focado em revendas
              de Gás e Água, que é distribuído para todo o Brasil ), utilizando
              as tecnologias: <b>Angular, Node e MongoDB,</b> e fazendo o
              versionamento de todo o código utilizando <b>GIT</b> com modelo{' '}
              <b>GIT FLOW.</b>
            </p>
            <p>
              - Desenvolvendo um microsserviço focado na área financeira desse
              sistema ERP, participando de todas as etapas, desde o
              planejamento, construção da interface com Figma, desenvolvimento
              das páginas e funcionalidades no back e no front, até o deploy,
              utilizando as tecnologias:{' '}
              <b>ReactJS, NextJS, Typescript, MongoDB, SASS,</b> práticas de{' '}
              <b>CI/CD</b> e versionamento de código com <b>GIT</b> com modelo{' '}
              <b>GIT FLOW</b>.
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
          alt=""
        />
      </div>
    </section>
  )
}
