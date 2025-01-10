"use client";
import { projetos } from "@/data/data";
import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CarrosselProjetos() {
  const [projetoAtual, setProjetoAtual] = useState<number>(0);
  const [nextInterval, setNextInterval] = useState<NodeJS.Timeout>()

  function proximoProjeto() {
    setProjetoAtual((anterior) => {
      if (projetos.length - 1 === anterior) {
        // ultimo projeto
        return 0;
      }
      return anterior + 1;
    });
  }

//   function anteriorProjeto() {
//     setProjetoAtual((anterior) => {
//       if (anterior === 0) {
//         // primeiro projeto
//         return projetos.length - 1;
//       }
//       return anterior - 1;
//     });
//   }

  function pararIntervalo() {
    clearInterval(nextInterval)
  }

  function criarIntervalo() {
    pararIntervalo();
    setNextInterval(setInterval(() => {
        proximoProjeto()
    }, 3000));
  }

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="button-container absolute bottom-12 z-30 flex gap-4 w-full justify-center">
        {projetos.map((projeto, i) => {
            return <button
            onMouseEnter={() => {
                pararIntervalo();
            }}
            onMouseLeave={() => {
                criarIntervalo();
            }}
            onClick={() => { 
                setProjetoAtual(i);
            }} className={`w-4 h-4 shadow-md ${projetoAtual === i ? "bg-neutral-900" : "bg-neutral-500"} rounded-full`} key={projeto.titulo}/>
        })}
      </div>

      {projetos.map((projeto, i) => {
        return (
          <div
            key={projeto.titulo}
            className="h-[695px] w-full bg-white absolute duration-150 rounded-3xl overflow-hidden"
            style={{
              transform: `translateX(${100 * i - 100 * projetoAtual}%)`,
            }}
          >
            <div className="overlay z-20 w-full absolute h-full">
              <Button className="bg-black absolute top-0 right-0 m-4 text-xl text-white border-none">
                Acessar
              </Button>
              <h3 className="text-black stroke-black stroke-1 text-5xl absolute bottom-0 m-4 drop-shadow-xl">
                {projeto.titulo}
              </h3>
            </div>

            {/* <div className="absolute bg-black/30 z-10 h-full w-full"></div> */}
            <Image
              className="absolute h-full w-full object-contain "
              src={projeto.imgProjeto}
              alt={projeto.descricao}
              width={"1280"}
              height={"720"}
            />
          </div>
        );
      })}
    </>
  );
}
