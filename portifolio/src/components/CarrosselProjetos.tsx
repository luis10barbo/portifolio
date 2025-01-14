"use client";
import { InfoTecnologia, projetos } from "@/data/data";
import Button from "./Button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {Link} from "@/i18n/routing";

export default function CarrosselProjetos() {
  const [iProjetoAtual, setIProjetoAtual] = useState<number>(0);
  const [nextInterval, setNextInterval] = useState<NodeJS.Timeout>();
  const [intervalo, setIntervalo] = useState(0);
  const tempoParaTrocar = 3000;

  const proximoProjeto = useCallback(() => {
    setIProjetoAtual((anterior) => {
      if (projetos.length - 1 === anterior) {
        // ultimo projeto
        return 0;
      }
      return anterior + 1;
    });
  }, []);

  const pararIntervalo = useCallback(() => {
    clearInterval(nextInterval);
  }, [nextInterval]);

  const criarIntervalo = useCallback(() => {
    pararIntervalo();
    const delay = 100;
    setNextInterval(
      setInterval(() => {
        setIntervalo((antigo) => {
          const novoValor = antigo + delay;
          if (novoValor >= tempoParaTrocar) {
            proximoProjeto();
            return 0;
          };
          return antigo + delay; 
        });
      }, delay)
    );
  }, [pararIntervalo, proximoProjeto]);

  useEffect(() => {
    criarIntervalo();
  }, []); // eslint-disable-line

  const t = useTranslations('Index');
  const projetoAtual = projetos.at(iProjetoAtual);
  return (
    <div
    onMouseEnter={() => {
      pararIntervalo();
    }}
    onMouseLeave={() => {
      criarIntervalo();
    }}
    >
      
      <div className="button-container absolute bottom-12 z-30 flex gap-4 w-full justify-center" >
        {projetos.map((projeto, i) => {
          return (
            <button
              
              onClick={() => {
                setIProjetoAtual(i);
              }}
              className={`w-4 h-4 shadow-md ${
                iProjetoAtual === i ? "bg-neutral-900" : "bg-neutral-500"
              } rounded-full`}
              key={projeto.titulo}
            />
          );
        })}
      </div>
      <div className="bottom-0 absolute bg-green-200 h-2 z-30 duration-200" style={{width: `${(intervalo / tempoParaTrocar) * 100}%`}}></div>
      {projetos.map((projeto, i) => {
        return (
          <div
            key={projeto.titulo}
            className="h-[695px] w-full bg-white absolute duration-150 rounded-3xl overflow-hidden"
            style={{
              transform: `translateX(${100 * i - 100 * iProjetoAtual}%)`,
            }}
          >
            <Link href={projetoAtual?.id ? `/proj/${projetoAtual.id}` : "#"} className="absolute w-full h-full z-30 hover:bg-black/5 duration-75"/>

            <div className="overlay z-40 w-full absolute">
              <div className="botoes-topo absolute left-4 top-24 sm:left-auto sm:top-4 sm:right-4 flex gap-2">
              {projeto.website ? <Button
                  className="bg-black text-base sm:text-xl text-white border-none shadow-md"
                  href={projeto.website}
                >
                  {t("acessar")}
                </Button>: <></>}
                
                {projeto.repo ? (
                  <Button
                    className="bg-black text-base sm:text-xl text-white border-none shadow-md"
                    href={projeto.repo}
                  >
                    {t("repositorio")}
                  </Button>
                ) : ( 
                  <></>
                )}
              </div>
              <div className="projeto-metadata absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md shadow-md">
                <div className="tecnologias flex gap-2">
                {projeto.tecBack.concat(projeto.tecFront).map((tec) => {
                  return <span key={tec} className="text-base sm:text-2xl">{InfoTecnologia[tec].titulo}</span>
                })}
                </div>
                
                
                <h3 className=" stroke-black stroke-1 text-2xl sm:text-5xl ">
                  {projeto.titulo}
                </h3>
              </div>
            </div>

            {/* <div className="absolute bg-black/30 z-10 h-full w-full"></div> */}
            <Image
              className="absolute h-full w-full object-contain "
              src={projeto.imgProjeto[0]}
              alt={projeto.descricao ? projeto.descricao : `imagem projeto ${projeto.imgProjeto}`}
              width={"1280"}
              height={"720"}
            />
          </div>
        );
      })}
    </div>
  );
}
