import { useCreateSkillsList } from '@/src/hooks/useCreateSkillsList'
import Image from 'next/image'
import React from 'react'
import style from './SkillsContent.module.scss'

export function SkillsContent() {
  const skillsList = useCreateSkillsList()
  return (
    <section className={style.skillsContainer}>
      <div data-aos="fade-right" className={style.skillsText}>
        <h2>Skills e experiência</h2>
        <p>
          Um apaixonado por tecnologia, venho estudando e me aprofundado na área
          de desenvolvimento web há dois anos. Buscando estar sempre em
          constante evolução, adoro novos conhecimentos e desafios para me
          aperfeiçoar da melhor maneira possível.{' '}
        </p>
        <p>
          Nesse tempo de estudo, venho construindo projetos e aplicando algumas
          das tecnologias, como: HTML, CSS, SASS, Style-Components, Javascript,
          Typescript, ReactJS, NodeJS, Express, MongoDB, Jquery, GIT, Firebase,
          JWT e integraçôes com APIs.
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
