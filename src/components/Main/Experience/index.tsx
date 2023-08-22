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
            <span>(01/12/2022 até atualmente)</span>
            <p>
              - Desenvolvendo um outro sistema ERP <br /> (Gestor:{' '}
              <b>
                <a
                  target="_blank"
                  href="https://gestor.vendergas.com.br"
                  rel="noreferrer"
                >
                  https://gestor.vendergas.com.br
                </a>
              </b>{' '}
              sistema focado em comércios em geral, com funcionalidades de
              lançamento de vendas, controle de contas e despesas, estoques de
              produtos, fiscal e etc), participando de todas as etapas, desde o
              planejamento do sistema, construção da interface com Figma,
              desenvolvimento das páginas e das funcionalidades no{' '}
              <b>back-end</b> e no <b>front-end</b>, até o deploy, utilizando as
              tecnologias:{' '}
              <b>
                NextJS, Typescript, Javascript, SASS, NodeJS, Express, MongoDB,
              </b>{' '}
              práticas de <b>CI/CD</b> e versionamento de código com{' '}
              <b>GIT/GITHUB</b> com modelo <b>GIT FLOW</b>;
            </p>
            <p>
              {' '}
              - Ainda continuei realizando manutenção e desenvolvendo novas
              funcionalidades no sistema Vendergás, porém, com menor foco.
            </p>
          </li>
          <li>
            <h4 style={{ fontSize: '1.5rem' }}>
              <b>Estágio</b> - VENDERGÁS Soluções em tecnologia
            </h4>
            <span>(01/06/2022 até 30/11/2022)</span>
            <p>
              - Trabalhando no <b>front-end</b> e no <b>back-end</b> de um
              sistema ERP (Vendergás:{' '}
              <b>
                <a
                  target="_blank"
                  href="https://vendergas.com.br/"
                  rel="noreferrer"
                >
                  https://vendergas.com.br/
                </a>
              </b>{' '}
              sistema para gestão empresarial focado em revendas de GÁS e ÁGUA,
              que é distribuído para todo o Brasil ), desenvolvendo novas
              features, criando e integrando novas rotas na API, desenvolvendo
              novas páginas, e realizando a manutenção de problemas do sistema,
              utilizando as tecnologias:{' '}
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
          alt=""
        />
      </div>
    </section>
  )
}
