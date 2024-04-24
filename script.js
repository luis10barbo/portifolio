 // iscripts
 const CLASSE_PROJETO_HOLDER = ".projeto-holder";
 const Tecnologias = {
   JAVASCRIPT: 1,
   SWING: 2,
   SPRING: 3,
   RUST: 4,
   ANGULAR: 5,
   SVELTE: 6,
   SQLITE: 7,
   POSTGRES: 8,
   ANDROID: 9,
 }
 const StatusProjeto = {
   PROGRESSO: 1,
   INCOMPLETO: 2,
   COMPLETO: 3
 }
 const projetos = [
   {
     titulo: "Ecommerce",
     descricao: "Site de Ecommerce generico",
     tecFront: [Tecnologias.ANGULAR],
     tecBack: [Tecnologias.SPRING, Tecnologias.POSTGRES],
     statusProjeto: StatusProjeto.PROGRESSO,
     imgProjeto: "https://github.com/luis10barbo/loja-spring/blob/dev/siteecommerce.png?raw=true",
     repo: "https://github.com/luis10barbo/loja-spring",
     website: "https://ecommerce.luisbb.com"
   },
   {
     titulo: "Chat Tempo Real",
     descricao: "Chat em tempo real inspirado por whatsapp",
     tecFront: [Tecnologias.SVELTE],
     tecBack: [Tecnologias.RUST, Tecnologias.SQLITE],
     statusProjeto: StatusProjeto.PROGRESSO,
     imgProjeto: "https://media.discordapp.net/attachments/828430263607623730/1187596721417621554/Screenshot_from_2023-12-21_21-36-41.png?ex=659776a2&is=658501a2&hm=346875b06bf20e534572238065e418d9c4824036bdd1b8195efcc0886e98ad95&=&format=webp&quality=lossless&width=950&height=475",
     repo:"https://github.com/luis10barbo/chatapp",
     website: "https://chat.luisbb.com/"
   },
   {
     titulo: "GStock",
     descricao: "Gerenciador de Estoque generico feito em Java",
     tecFront: [Tecnologias.SWING],
     tecBack: [Tecnologias.SQLITE],
     statusProjeto: StatusProjeto.COMPLETO,
     imgProjeto: "https://github.com/luis10barbo/GStock/raw/dev/extra/estoque.png?raw=true",
     repo: "https://github.com/luis10barbo/GStock",
     download: "https://github.com/luis10barbo/GStock/releases/download/1.0/EstoqueSwing-1.0.jar"
   },
   {
     titulo: "Gerador de Treino",
     descricao: "Aplicativo Mobile com funcionalidade completa para gerenciar rotinas de exercicios fisicos de clientes",
     tecFront: [Tecnologias.ANDROID],
     tecBack: [Tecnologias.SQLITE],
     statusProjeto: StatusProjeto.COMPLETO,
     imgProjeto: "https://i.imgur.com/lHml4vp.jpeg"
   }
 ]

 const InfoTecnologia = {
   [Tecnologias.SVELTE]: {
     img: "https://www.svgrepo.com/download/521311/svelte-16.svg",
     titulo: "Svelte"
   },
   [Tecnologias.SPRING]: {
     img: "https://www.svgrepo.com/download/376350/spring.svg",
     titulo: "Spring"
   },
   [Tecnologias.JAVASCRIPT]: {
     img: "https://www.svgrepo.com/download/353925/javascript.svg",
     titulo: "JavaScript"
   },
   [Tecnologias.ANGULAR]: {
     img: "https://www.svgrepo.com/download/503165/angular.svg",
     titulo: "Angular"
   },
   [Tecnologias.RUST]: {
     img: "https://www.svgrepo.com/download/369528/rust.svg",
     titulo: "Rust"
   },
   [Tecnologias.SWING]: {
     img: "https://www.svgrepo.com/download/452234/java.svg",
     titulo: "Swing"
   },
   [Tecnologias.SQLITE]: {
     img: "https://www.svgrepo.com/download/374094/sqlite.svg",
     titulo: "SQLite"
   },
   [Tecnologias.POSTGRES]: {
     img: "https://www.svgrepo.com/download/354200/postgresql.svg",
     titulo: "PostgreSQL"
   }, 
   [Tecnologias.ANDROID]: {
     img: "https://www.svgrepo.com/download/475631/android-color.svg",
     titulo: "Android"
   }
 }

 window.onload = () => {
   function copiarTelefone() {
     const botaoTelefone = document.querySelector(".botao-telefone");
     navigator.clipboard.writeText(botaoTelefone.innerText).then(() => {
       alert("Telefone copiado!");
     }, (err) => {
       alert("Nao foi possivel copiar o telefone!", err);
     });
   }

   function popularProjetos() {
    const projetoHolder = document.querySelector(CLASSE_PROJETO_HOLDER); 
     projetos.forEach(projeto => {
       const templateProjeto = document.querySelector(".template-projeto")?.content.cloneNode(true);
       console.log(templateProjeto);
       templateProjeto.querySelector(".titulo-projeto").innerText = projeto.titulo;

       if (projeto.descricao) {
         templateProjeto.querySelector(".descricao-projeto").innerText = projeto.descricao;
       }

       if (projeto.imgProjeto) {
         templateProjeto.querySelector(".img-projeto").src = projeto.imgProjeto;
       }
       

       // STATUS PROJETO
       const statusProjeto = templateProjeto.querySelector(".projeto-status");
       const cardStatus = templateProjeto.querySelector(".card-status");
       if (projeto.statusProjeto == StatusProjeto.INCOMPLETO) {
         statusProjeto.innerText = "Incompleto";
         cardStatus.classList.add("incompleto");
       } else if (projeto.statusProjeto == StatusProjeto.PROGRESSO) {
         statusProjeto.innerText = "Em Progresso";
         cardStatus.classList.add("progresso");
       } else if (projeto.statusProjeto == StatusProjeto.COMPLETO) {
         statusProjeto.innerText = "Completo";
         cardStatus.classList.add("completo");
       }

       // LINKS PROJETO
       if (projeto.repo) {
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-repo");
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.repo;
       }

       if (projeto.website) {
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-acessar");
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.website;
       }

       if (projeto.download) {
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-download");
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.download;
       }

       const templateCardTec = templateProjeto.querySelector("#template-cardtec");
       projeto.tecBack.forEach((tecnologia) => {
         const cardTec = templateCardTec.content.cloneNode(true);
         console.log(InfoTecnologia, tecnologia);
         cardTec.querySelector(".nome-card-tec").innerText = InfoTecnologia[tecnologia].titulo;
         cardTec.querySelector(".img-card-tec").src = InfoTecnologia[tecnologia].img;
         
         templateProjeto.querySelector(".tecnologias-back").appendChild(
           document.importNode(cardTec, true)
         );

       })
       
       projeto.tecFront.forEach((tecnologia) => {
         const cardTec = templateCardTec.content.cloneNode(true);
         console.log(InfoTecnologia, tecnologia);
         cardTec.querySelector(".nome-card-tec").innerText = InfoTecnologia[tecnologia].titulo;
         cardTec.querySelector(".img-card-tec").src = InfoTecnologia[tecnologia].img;
         
         templateProjeto.querySelector(".tecnologias-front").appendChild(
           document.importNode(cardTec, true)
         );

       })

       projetoHolder.appendChild(
         document.importNode(templateProjeto, true)
       );
       // projetoHolder.innerHTML += templateProjeto.innerHTML;
     });

     document.querySelector(".botao-telefone").addEventListener("click", copiarTelefone);
   }

   popularProjetos();
 }
