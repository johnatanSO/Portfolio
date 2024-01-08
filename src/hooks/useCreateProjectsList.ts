interface Project {
  githubLink: string
  title: string
  description: string
  deployLink: string
  imageLink: string
  toRefactor?: boolean
  inRefactoring?: boolean
}

export function useCreateProjectsList(): Project[] {
  return [
    {
      githubLink: '/rentx',
      title: 'rental',
      description:
        'Esta é uma aplicação destinada à um estabelecimento que realiza alugueis de carros. O sistema possui uma área para interação do cliente, e também uma área de gestão com permissões de administrador para que o usuário possa fazer o controle de carros cadastrados, categorias, especificações, alugueis e etc.',
      deployLink: 'https://rentx-145iw47y0-johnatanso.vercel.app/',
      imageLink: 'rentx-image.png',
    },
    {
      githubLink: '/sistema-de-vendas',
      title: 'comerce',
      description:
        'Esse é um sistema ERP para gerenciamento de dados de um comércio, com funcionalidades de login/cadastro de conta, dashboard, cadastro de produtos, vendas, contas a pagar/receber e clientes. O sistema possui também uma versão mobile construída com React Native.',
      deployLink: 'https://sistema-de-vendas-lac.vercel.app/',
      imageLink: 'sistema-de-vendas.png',
    },
    {
      githubLink: '/gestor-escolar',
      title: 'schoolSystem',
      description:
        'Esse é um sistema escolar feito para controlar e gerenciar dados de alunos de uma escola como: notas, faltas e advertências. O sistema é dividido em duas áreas, uma para professores e uma para alunos com permissões diferentes para cada um. Construído com NextJS e SASS no front-end e Node, Express no back-end com o banco de dados MongoDB.',
      deployLink: 'https://gestor-escolar.vercel.app/',
      imageLink: 'schoolPrint.png',
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
        'Esse é um projeto de uma biblioteca para busca de filmes e séries construído usando NextJS, SASS no front end e a API OMdb para pesquisa de dados.',
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
