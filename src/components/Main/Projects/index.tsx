import React from 'react'
import style from './Projects.module.scss'
import { GithubLogo, RocketLaunch } from 'phosphor-react'
import { useCreateProjectsList } from '../../../hooks/useCreateProjectsList'
import Link from 'next/link'

export function Projects() {
  const projects = useCreateProjectsList()
  return (
    <section id="projectsContainer" className={style.projectsContainer}>
      <div data-aos="fade-left" className={style.headerProjects}>
        <div className={style.projectsImage}>
          <img
            alt="Imagem de projetos"
            src="https://cdni.iconscout.com/illustration/premium/thumb/coding-project-1884980-1597918.png"
          />
        </div>
        <div className={style.projectsText}>
          <h2>Alguns projetos</h2>
          <p>
            Abaixo estão alguns dos meus projetos que fiz usando os
            conhecimentos adquiridos durante esse tempo. Todos eles estão
            disponíveis no meu{' '}
            <a href="https://github.com/johnatanSO">Github</a> em seus
            respectivos repositórios. Para visitar, é só clicar em visitar e
            conferir.
          </p>
        </div>
      </div>

      <ul data-aos="fade-up" className={style.gridProjects}>
        {projects?.map((project) => {
          return (
            <li key={project.deployLink} className={style.projectCard}>
              <img
                className={style.backgroundProjectImage}
                src={'../../../assets/images/' + project.imageLink}
                alt=""
              />

              <p>{project.description}</p>

              <div className={style.buttonsContainer}>
                <Link
                  target="_blank"
                  rel="nooper noreferrer"
                  href={project.deployLink}
                >
                  <button className={style.visitButton}>
                    <RocketLaunch className="iconButton" size={18} />
                    Visitar
                  </button>
                </Link>

                <Link
                  target="_blank"
                  rel="nooper noreferrer"
                  href={`https://github.com/johnatanSO${project.githubLink}`}
                >
                  <button className={style.githubButton}>
                    <GithubLogo className="iconButton" size={18} />
                    Github
                  </button>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
