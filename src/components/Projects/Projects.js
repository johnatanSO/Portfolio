import React from "react";
import "./Projects.scss";
import {GithubLogo, RocketLaunch} from "phosphor-react"
import {data} from "../../services/data";

function Projects() {
  return (
    <section id="projectsContent" className="projectsContent">
      <div data-aos="fade-right" className="headerProjects">
        <div  className="projectsText">
          <h2>Projetos</h2>
          <p>
            Abaixo estão alguns dos meus projetos que fiz usando os
            conhecimentos adquiridos durante esse tempo. Todos eles estão
            disponíveis no meu <a href="https://github.com/johnatanSO">Github</a> em seus
            respectivos repositórios. Para visitar, é só clicar e aproveitar.
          </p>
        </div>
        <div className="projectsImage">
          <img alt="Imagem de projetos" src="https://cdni.iconscout.com/illustration/premium/thumb/coding-project-1884980-1597918.png" />
        </div>
      </div>

      <ul data-aos="fade-left"  className="gridProjects">

      {data.projects.map((project) => {
          return (
            <li className={project.title}>
                <p>{project.description}</p>
                <img src={'../../../assets/images/'+project.imageLink} alt="" />
             
              <div className="buttons-container">
                <a href={project.deployLink} target="_blank" rel="nooper noreferrer">
                  <button className="visitButton"><RocketLaunch className="iconButton" size={18} />Visitar</button>
                </a>

                <a href={'https://johnatanso.github.io/'+project.deployLink} target="_blank" rel="nooper noreferrer">
                  <button className="visitButton"> <GithubLogo className="iconButton" size={18} />Github</button>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export default Projects;
