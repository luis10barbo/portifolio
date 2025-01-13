import Ecommerce from "@/../public/projetos/ecommerce.png"
import Chat from "@/../public/projetos/chat.png"
import Gstock from "@/../public/projetos/gstock.png"
import GeradorTreino from "@/../public/projetos/geradortreino.jpeg"
import Portifolio from "@/../public/projetos/portifolio.png"
import Vector from "@/../public/projetos/transporte.jpeg"




export const Tecnologias = {
  JAVASCRIPT: 1,
  SWING: 2,
  SPRING: 3,
  RUST: 4,
  ANGULAR: 5,
  SVELTE: 6,
  SQLITE: 7,
  POSTGRES: 8,
  ANDROID: 9,
  NEXT:10,
  REACT:11,
  NODE: 12,
};
export const StatusProjeto = {
  PROGRESSO: 1,
  INCOMPLETO: 2,
  COMPLETO: 3,
};
export const projetos = [
  {
    titulo: "Portifólio",
    descricao: "Meu portifólio",
    tecFront: [Tecnologias.NEXT, Tecnologias.REACT],
    tecBack: [],
    statusProjeto: StatusProjeto.PROGRESSO,
    imgProjeto:
      Portifolio,
    repo: "https://github.com/luis10barbo/portifolio",
    website: "https://luisbrb.com.br", 
  },
  {
    titulo: "VectorApp",
    descricao: "Aplicativo de transporte público",
    tecFront: [Tecnologias.ANDROID],
    tecBack: [Tecnologias.NODE],
    statusProjeto: StatusProjeto.PROGRESSO,
    imgProjeto:
      Vector,
    repo: "https://github.com/LucasLima004/Vector_mobile_app",
  },
  {
    titulo: "Gerador de Treino",
    descricao:
      "Aplicativo Mobile com funcionalidade completa para gerenciar rotinas de exercicios fisicos de clientes",
    tecFront: [Tecnologias.ANDROID],
    tecBack: [Tecnologias.SQLITE],
    statusProjeto: StatusProjeto.COMPLETO,
    imgProjeto: GeradorTreino,
  },
  {
    titulo: "E-commerce",
    descricao: "Site de Ecommerce generico",
    tecFront: [Tecnologias.ANGULAR],
    tecBack: [Tecnologias.SPRING, Tecnologias.POSTGRES],
    statusProjeto: StatusProjeto.PROGRESSO,
    imgProjeto:
      Ecommerce,
    repo: "https://github.com/luis10barbo/loja-spring",
    website: "https://ecommerce.luisbrb.com.br",
  },
  {
    titulo: "Chat APP",
    descricao: "Chat em tempo real inspirado por whatsapp",
    tecFront: [Tecnologias.SVELTE],
    tecBack: [Tecnologias.RUST, Tecnologias.SQLITE],
    statusProjeto: StatusProjeto.PROGRESSO,
    imgProjeto: Chat,
    repo: "https://github.com/luis10barbo/chatapp",
    // website: "https://chat.luisbrb.com.br/",
  },
  {
    titulo: "GStock",
    descricao: "Gerenciador de Estoque generico feito em Java",
    tecFront: [Tecnologias.SWING],
    tecBack: [Tecnologias.SQLITE],
    statusProjeto: StatusProjeto.COMPLETO,
    imgProjeto:
      Gstock,
    repo: "https://github.com/luis10barbo/GStock",
    download:
      "https://github.com/luis10barbo/GStock/releases/download/1.0/EstoqueSwing-1.0.jar",
  },
];

export const InfoTecnologia = {
  [Tecnologias.SVELTE]: {
    img: "https://www.svgrepo.com/download/521311/svelte-16.svg",
    titulo: "Svelte",
  },
  [Tecnologias.NODE]: {
    img: "https://www.svgrepo.com/download/521311/svelte-16.svg",
    titulo: "NodeJS",
  },
  [Tecnologias.NEXT]: {
    img: "https://www.svgrepo.com/download/521311/svelte-16.svg",
    titulo: "NextJS",
  },
  [Tecnologias.REACT]: {
    img: "https://www.svgrepo.com/download/521311/svelte-16.svg",
    titulo: "React",
  },
  [Tecnologias.SPRING]: {
    img: "https://www.svgrepo.com/download/376350/spring.svg",
    titulo: "Spring",
  },
  [Tecnologias.JAVASCRIPT]: {
    img: "https://www.svgrepo.com/download/353925/javascript.svg",
    titulo: "JavaScript",
  },
  [Tecnologias.ANGULAR]: {
    img: "https://www.svgrepo.com/download/503165/angular.svg",
    titulo: "Angular",
  },
  [Tecnologias.RUST]: {
    img: "https://www.svgrepo.com/download/369528/rust.svg",
    titulo: "Rust",
  },
  [Tecnologias.SWING]: {
    img: "https://www.svgrepo.com/download/452234/java.svg",
    titulo: "Swing",
  },
  [Tecnologias.SQLITE]: {
    img: "https://www.svgrepo.com/download/374094/sqlite.svg",
    titulo: "SQLite",
  },
  [Tecnologias.POSTGRES]: {
    img: "https://www.svgrepo.com/download/354200/postgresql.svg",
    titulo: "PostgreSQL",
  },
  [Tecnologias.ANDROID]: {
    img: "https://www.svgrepo.com/download/475631/android-color.svg",
    titulo: "Android",
  },
};
