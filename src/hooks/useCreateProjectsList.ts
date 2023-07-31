export function useCreateProjectsList() {
  return [
    {
      githubLink: '/sistema-de-vendas',
      title: 'comerce',
      description:
        'Esse é um sistema ERP para gerenciamento de dados de um comércio, com funcionalidades de login/cadastro de conta, dashboard, cadastro de produtos, vendas, contas a pagar/receber e clientes.',
      deployLink: 'https://sistema-de-vendas-lac.vercel.app/',
      imageLink: 'sistema-de-vendas.png',
    },
    {
      githubLink: '/Sistema-Escolar',
      title: 'schoolSystem',
      description:
        'Esse é um sistema escolar feito para controlar e gerenciar dados de alunos de uma escola como: notas, faltas e advertências. O sistema é dividido em duas áreas, uma para professores e uma para alunos com permissões diferentes para cada um. Construído com NextJS e SASS modules no front-end e Node e Express no back-end com o banco de dados MongoDB. O sistema possui também uma versão mobile construída com React Native.',
      deployLink:
        'https://sistema-escolar-delta.vercel.app/pages/teacher/index.html',
      imageLink: 'schoolPrint.png',
      inRefactoring: true,
    },
    {
      githubLink: '/To-Do-List-React',
      title: 'todo',
      description:
        'Esse é um projeto de uma to-do list, feita com NextJS e SASS modules, para que você consiga organizar suas tarefas da maneira mais prática possível e otimizar o seu tempo.',
      deployLink: 'https://to-do-list-react-bice.vercel.app/',
      imageLink: 'todoPrint.png',
    },
    {
      githubLink: '/api-films',
      title: 'apiFilms',
      description:
        'Esse é um projeto de uma biblioteca para busca de filmes e séries construído usando NextJS e a API OMdb.',
      deployLink: 'https://api-films.vercel.app/',
      imageLink: 'moviesPrint.png',
    },
    {
      githubLink: '/JOGO-DA-MEMORIA',
      title: 'memoryGame',
      description:
        'Um jogo da memória simples para que você possa se distrair um pouco de forma rápida. Construído com HTML, CSS e Javascript puro.',
      deployLink: 'https://jogo-da-memoria-snowy.vercel.app/',
      imageLink: 'memoryPrint.png',
      toRefactor: true,
    },
    {
      githubLink: '/JOGO-DA-VELHA',
      title: 'jogoDaVelha',
      description:
        'Um clássico jogo da velha para que você possa jogar com algum amigo e se divertir. Construído com HTML, CSS e Javascript puro.',
      deployLink: 'https://johnatanso.github.io/JOGO-DA-VELHA/',
      imageLink: 'jogoDaVelhaPrint.png',
      toRefactor: true,
    },
  ]
}
