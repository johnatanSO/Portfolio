import { useCreateSkillsList } from '../../../hooks/useCreateSkillsList'
import Image from 'next/image'
import React from 'react'
import style from './SkillsContent.module.scss'

export function SkillsContent() {
  const skillsList = useCreateSkillsList()
  return (
    <section id="skillsContainer" className={style.skillsContainer}>
      <ul data-aos="fade-right" className={style.skillsImageGrid}>
        {skillsList?.map((skill: any) => {
          return (
            <li key={skill.src}>
              <Image
                style={skill.colorWhite ? { filter: 'invert(100%)' } : {}}
                width={70}
                height={70}
                src={skill?.src}
                alt="skillIcon"
              />
            </li>
          )
        })}
      </ul>
      <div data-aos="fade-right" className={style.skillsText}>
        <h2>Skills</h2>
        <p>
          Como Desenvolvedor Web Full Stack, tenho habilidades sólidas em
          diversas tecnologias web, incluindo
          <b> HTML, CSS/SASS modules, Typescript/JavaScript. </b>
          Além disso, tenho experiência com frameworks como{' '}
          <b>ReactJS, NextJS, AngularJS</b>, e suas bibliotecas como,
          ContextAPI, WebSockets, React Hook Form, etc, que me ajudam a
          desenvolver aplicações web responsivas e dinâmicas, buscando sempre
          aplicar as melhores práticas e manter um código limpo.
        </p>
        <p>
          Possuo também experiência em criação e integração de <b>APIs REST </b>
          utilizando <b>NodeJS e Express, </b>que me permitem criar soluções
          seguras e escaláveis. Também tenho conhecimento em banco de dados com{' '}
          <b>MongoDB</b> e posso implementar soluções de armazenamento
          eficientes e bem projetadas.
        </p>
        <p>
          Além disso, tenho experiência em ferramentas e tecnologias importantes
          como <b>Docker, GIT/GITHUB, Firebase</b>, práticas de{' '}
          <b>CI/CD, Clean Code, SOLID,</b> testes automatizados com <b>JEST,</b>
          que me permitem desenvolver soluções completas, seguras e integradas,
          desde a fase de desenvolvimento até a implementação.
        </p>
      </div>
    </section>
  )
}
