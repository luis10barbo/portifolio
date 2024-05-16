 // iscripts
 const CLASSE_PROJETO_HOLDER = ".projeto-holder";
 
 window.onload = () => {
   function copiarTelefone() {
    
     const botaoTelefone = /** @type {HTMLButtonElement} */ (document.querySelector(".botao-telefone"));

     navigator.clipboard.writeText(botaoTelefone.innerText).then(() => {
       alert("Telefone copiado!");
     }, (err) => {
       alert("Nao foi possivel copiar o telefone! " + err);
     });
   }

   function copiarEmail() {
    const botaoEmail = /** @type {HTMLButtonElement} */ (document.querySelector(".botao-email"));

     navigator.clipboard.writeText(botaoEmail.innerText).then(() => {
       alert("Email copiado!");
     }, (err) => {
       alert("Nao foi possivel copiar o telefone! " + err);
     });
   }

   function popularProjetos() {
    
    const projetoHolder = /** @type {HTMLDivElement} */ (document.querySelector(CLASSE_PROJETO_HOLDER)); 


     projetos.forEach(projeto => {
        /** @type {HTMLTemplateElement | null} */
       const templateProjetoOrig = document.querySelector(".template-projeto");
       if (!templateProjetoOrig) {
        console.error("Template de projeto nao encontrado, contatar administrador da pagina")
        return;
       }
       
       /** @type {HTMLElement} */ 
       // @ts-ignore
       const templateProjeto = templateProjetoOrig.content.cloneNode(true);
       if (!templateProjeto) {
        return
       }
       
       const tituloProjeto = /** @type {HTMLParagraphElement} */ (templateProjeto.querySelector(".titulo-projeto"));
       tituloProjeto.innerText = projeto.titulo;

       if (projeto.descricao) {
         /** @type {HTMLParagraphElement} */ (templateProjeto.querySelector(".descricao-projeto")).innerText = projeto.descricao;
       }

       if (projeto.imgProjeto) {
         /** @type {HTMLImageElement} */ (templateProjeto.querySelector(".img-projeto")).src = projeto.imgProjeto;
       }
    
       // STATUS PROJETO
       /** @type {HTMLParagraphElement | null} */
       const statusProjeto = templateProjeto.querySelector(".projeto-status");
       /** @type {HTMLDivElement | null} */
       const cardStatus = templateProjeto.querySelector(".card-status");

       if (!statusProjeto) {
        console.error("componente .projeto-status nao encontrado ")
        return;
       } 

       if (!cardStatus) {
        console.error("componente .card-status nao encontrado ")
        return;
       } 

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
        /** @type {HTMLAnchorElement | null} */
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-repo");
         if (!aBotaoRepo) {
            console.error(".a-botao-repo nao encontrado repo");
            return;
         }
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.repo;
       }

       if (projeto.website) {
        /** @type {HTMLAnchorElement | null} */
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-acessar");
         if (!aBotaoRepo) {
            console.error(".a-botao-acessar nao encontrado web");
            return;
         }
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.website;
       }

       if (projeto.download) {
        /** @type {HTMLAnchorElement | null} */
         const aBotaoRepo = templateProjeto.querySelector(".a-botao-download");
         if (!aBotaoRepo) {
            console.error(".a-botao-download nao encontrado download");
            return;
         }
         aBotaoRepo.classList.add("visivel");
         aBotaoRepo.href = projeto.download;
       }

        /** @type {HTMLTemplateElement | null} */
       const templateCardTec = templateProjeto.querySelector("#template-cardtec");
       if (!templateCardTec) {
        console.error("#template-cardtec nao encontrado")
        return;
       }
       projeto.tecBack.forEach((tecnologia) => {
        /** @type {HTMLDivElement} */
        // @ts-ignore
         const cardTec = templateCardTec.content.cloneNode(true);
         /** @type {HTMLDivElement | null} */
         const nomeCardTec = cardTec.querySelector(".nome-card-tec");
         /** @type {HTMLImageElement | null} */
         const imgCardTec = cardTec.querySelector(".img-card-tec");

        if (!nomeCardTec) {
            console.error(".nome-card-tec nao encontrado")
            return;
        }

        if (!imgCardTec) {
            console.error(".img-card-tec nao encontrado")
            return;
        }

         nomeCardTec.innerText = InfoTecnologia[tecnologia].titulo;
         imgCardTec.src = InfoTecnologia[tecnologia].img;
         
         /** @type {HTMLDivElement | null} */
        const tecnologiasBack = templateProjeto.querySelector(".tecnologias-back");
        if (!tecnologiasBack) {
            console.error(".tecnologias-back nao encontrado")
            return;
        }
        tecnologiasBack.appendChild(
           document.importNode(cardTec, true)
         );

       })
       
       projeto.tecFront.forEach((tecnologia) => {
         const cardTec = /** @type {HTMLDivElement} */ (templateCardTec.content.cloneNode(true));
         console.log(InfoTecnologia, tecnologia);
         /** @type {HTMLParagraphElement} */ (cardTec.querySelector(".nome-card-tec")).innerText = InfoTecnologia[tecnologia].titulo;
         /** @type {HTMLImageElement} */ (cardTec.querySelector(".img-card-tec")).src = InfoTecnologia[tecnologia].img;
         
          /** @type {HTMLDivElement} */ (templateProjeto.querySelector(".tecnologias-front")).appendChild(
           document.importNode(cardTec, true)
         );

       })

       projetoHolder.appendChild(
         document.importNode(templateProjeto, true)
       );
       // projetoHolder.innerHTML += templateProjeto.innerHTML;
     });

     /** @type {HTMLButtonElement} */ (document.querySelector(".botao-telefone")).addEventListener("click", copiarTelefone);
     /** @type {HTMLButtonElement} */ (document.querySelector(".botao-email")).addEventListener("click", copiarEmail);

   }

   async function observarLoad() {
    /** @type {HTMLParagraphElement | null} */
    const carregandoText = document.querySelector(".bem-vindo-carregando");
    if (!carregandoText) {
        return
    }

    let i = 1;
    let reps = i
    const maxReps = 3000 / 250
    const interval = setInterval(() => {
        carregandoText.innerText = `Carregando ${".".repeat(i)}`
        if (i == 3) {
            i = 0;
        }
        i++;
        reps++;
        
        if (reps > maxReps) {
            clearInterval(interval);
        }

    }, 250);

   }

   popularProjetos();
   observarLoad();
 }
