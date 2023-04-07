import { useCreateSkillsList } from '@/src/hooks/useCreateSkillsList'
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
                src={skill.src}
                alt="skillIcon"
              />
            </li>
          )
        })}
      </ul>
      <div data-aos="fade-right" className={style.skillsText}>
        <h2>Skills</h2>
        <p>
          Como desenvolvedor Full Stack, tenho habilidades sólidas em diversas
          tecnologias web, incluindo HTML, CSS, SASS, JavaScript e Typescript.
          Além disso, tenho experiência com frameworks como React, Angular e
          Next, que me ajudam a desenvolver aplicações web responsivas e
          dinâmicas, buscando sempre aplicar as melhores práticas.
        </p>
        <p>
          Possuo também experiência em criação e integração de APIs REST
          utilizando Node e Express, que me permitem criar soluções seguras e
          escaláveis. Também tenho conhecimento em banco de dados com MongoDB e
          posso implementar soluções de armazenamento eficientes e bem
          projetadas.
        </p>
        <p>
          Além disso, tenho experiência em ferramentas e tecnologias importantes
          como Docker, GIT, Firebase e conhecimentos em CI/CD, que me permitem
          desenvolver soluções completas e integradas, desde a fase de
          desenvolvimento até a implementação.
        </p>
      </div>
    </section>
  )
}
