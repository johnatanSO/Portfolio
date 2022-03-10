import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <section className="projectsContent">

      <div className="headerProjects">
        <div className="projectsText">
          <h2>Projetos</h2>
          <p>Abaixo estão alguns dos meus projetos que fiz usando os conhecimentos adquiridos durante esse tempo. Todos eles estão disponíveis no meu <a href="https://github.com/johnatanSO">Github</a> em seus respectivos repositórios. Para visitar, é só clicar e aproveitar.</p>
        </div>
        <div className="projectsImage">
          {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettwhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p> */}
        </div>
      </div>

      <ul className="gridProjects">
        <li className="todo"><img alt="" src="/assets/images/todoPrint.png"/><p>Esse é um pojeto de uma to-do list para que você consiga organizar suas tarefas da maneira mais prática possível.</p><button className="visitButton">Visitar</button></li>

        <li className="apiFilms"><img alt="" src="/assets/images/moviesPrint.png"/><p>Esse é um projeto de uma biblioteca de filmes e séries construído com ReactJS e usando a API RESTful OMdb.</p><button className="visitButton">Visitar</button></li>

        <li className="project3"><img alt="" src="/assets/images/schoolPrint.png"/><p>Esse é um sistema escolar feito para controlar e gerenciar dados de alunos como: notas, faltas e advertências. Construído com o banco de dados Firebase. </p><button className="visitButton">Visitar</button></li>

        <li className="project4"><img alt="" src="/assets/images/memoryPrint.png"/><p>Um jogo da memória simples para que você possa se distraír um pouco de forma rápida. Construído com HTML, CSS e Javascript puro.</p><button className="visitButton">Visitar</button></li>

        <li className="project5"><img alt="" src="/assets/images/jogoDaVelhaPrint.png"/><p>Um clássico jogo da velha para que você possa jogar com algum amigo e se divertir. Construído com HTML, CSS e Javascript puro. </p><button className="visitButton">Visitar</button></li>

        <li className="project6"><img alt="" src="/assets/images/playerPrint.png"/><p>Um player de música para você ouvir as suas músicas favoritas enquanto faz qualquer coisa durante o dia. Construído com HTML, CSS e Javascript puro.</p><button className="visitButton">Visitar</button></li>
      </ul>
    </section>
  )
}

export default Projects