import { useCreateSkillsList } from '@/src/hooks/useCreateSkillsList'
import Image from 'next/image'
import React from 'react'
import style from './SkillsContent.module.scss'

export function SkillsContent() {
  const skillsList = useCreateSkillsList()
  return (
    <section id="skillsContainer" className={style.skillsContainer}>
      <div data-aos="fade-right" className={style.skillsText}>
        <h2>Skills</h2>
        <p>
          Como desenvolvedor Full Stack, tenho habilidades sólidas em diversas
          tecnologias web, incluindo HTML5, CSS3, SASS, JavaScript (ES6) e
          Typescript. Além disso, tenho experiência com frameworks como React,
          Angular e Next, e posso desenvolver aplicações web responsivas e
          dinâmicas, buscando sempre aplicar as melhores práticas.
        </p>
        <p>
          Minha experiência em criação e integração de APIs REST me permite
          construir soluções escaláveis e seguras, utilizando Node e Express.
          Também tenho conhecimento em banco de dados MongoDB e posso
          implementar soluções de armazenamento eficientes e bem projetadas.
        </p>
        <p>
          Além disso, tenho experiência em ferramentas e tecnologias importantes
          como Docker, GIT, Firebase e CI/CD, que me permite desenvolver
          soluções completas e integradas, desde a fase de desenvolvimento até a
          implementação.
        </p>
      </div>
      <ul data-aos="fade-right" className={style.skillsImageGrid}>
        {skillsList?.map((skill: any) => {
          return (
            <li key={skill.src}>
              <Image width={70} height={70} src={skill.src} alt="skillIcon" />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
