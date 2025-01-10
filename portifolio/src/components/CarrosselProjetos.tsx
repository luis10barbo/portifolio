"use client";
import { InfoTecnologia, projetos } from "@/data/data";
import Button from "./Button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function CarrosselProjetos() {
  const [projetoAtual, setProjetoAtual] = useState<number>(0);
  const [nextInterval, setNextInterval] = useState<NodeJS.Timeout>();

  const proximoProjeto = useCallback(() => {
    setProjetoAtual((anterior) => {
      if (projetos.length - 1 === anterior) {
        // ultimo projeto
        return 0;
      }
      return anterior + 1;
    });
  }, []);

  //   function anteriorProjeto() {
  //     setProjetoAtual((anterior) => {
  //       if (anterior === 0) {
  //         // primeiro projeto
  //         return projetos.length - 1;
  //       }
  //       return anterior - 1;
  //     });
  //   }

  const pararIntervalo = useCallback(() => {
    clearInterval(nextInterval);
  }, [nextInterval]);

  const criarIntervalo = useCallback(() => {
    pararIntervalo();
    setNextInterval(
      setInterval(() => {
        proximoProjeto();
      }, 3000)
    );
  }, [pararIntervalo, proximoProjeto]);

  useEffect(() => {
    criarIntervalo();
  }, []); // eslint-disable-line

  const t = useTranslations('Index');

  return (
    <>
      <div className="button-container absolute bottom-12 z-30 flex gap-4 w-full justify-center">
        {projetos.map((projeto, i) => {
          return (
            <button
              onMouseEnter={() => {
                pararIntervalo();
              }}
              onMouseLeave={() => {
                criarIntervalo();
              }}
              onClick={() => {
                setProjetoAtual(i);
              }}
              className={`w-4 h-4 shadow-md ${
                projetoAtual === i ? "bg-neutral-900" : "bg-neutral-500"
              } rounded-full`}
              key={projeto.titulo}
            />
          );
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
            <div className="overlay z-20 w-full absolute h-full ">
              <div className="botoes-topo absolute left-4 top-24 sm:left-auto sm:top-4 sm:right-4 flex gap-2">
                <Button
                  className="bg-black text-base sm:text-xl text-white border-none shadow-md"
                  href={projeto.website}
                >
                  {t("acessar")}
                </Button>
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
