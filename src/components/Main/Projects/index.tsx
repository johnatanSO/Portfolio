import React from 'react'
import style from './Projects.module.scss'
import { GithubLogo, RocketLaunch } from 'phosphor-react'
import { useCreateProjectsList } from '../../../hooks/useCreateProjectsList'

export function Projects() {
  const projects = useCreateProjectsList()
  return (
    <section className={style.projectsContainer}>
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
            respectivos repositórios. Para visitar, é só clicar e aproveitar.
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
                <button className={style.visitButton}>
                  <RocketLaunch className="iconButton" size={18} />
                  Visitar
                </button>

                <button className={style.githubButton}>
                  <GithubLogo className="iconButton" size={18} />
                  Github
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
