import Image from "next/image";
import imagem from "@/../public/yo.jpg"
import Button from "@/components/Button";
import LanguageContainer from "@/components/LanguageContainer";
import CarrosselProjetos from "@/components/CarrosselProjetos";

import Brazil from "@/../public/bandeiras/brazil.svg"
import Uk from "@/../public/bandeiras/uk.svg"
import Spain from "@/../public/bandeiras/spain.svg"

import LinkedIn from "@/../public/icons/linkedin.svg"
import Whatsapp from "@/../public/icons/whatsapp.svg"
import Email from "@/../public/icons/email.svg"
import Cellphone from "@/../public/icons/cellphone.svg"
import { useTranslations } from "next-intl";


export default function Home() {
  const habilidades: {tipo: string, valores?: string[]}[] = [
    {tipo: "linguagens", valores: ["Python", "Typescript", "Java", "PHP"]},
    {tipo: "frameworks", valores: ["Springboot", "React", "Express", "NextJS"]},
    {tipo: "bancoDeDados", valores: ["SQL (SQLite, PostgreSQL, MySQL)"]},
    {tipo: "versionamento", valores: ["Git", "Github", "Gitlab"]},
    {tipo: "sistemasOperacionais", valores: ["Windows", "Linux"]}
  ]

  const t = useTranslations('Index');

  return (
    <>
      <main className="flex justify-center overflow-x-hidden">
        <div className="page-content  w-[333px] sm:w-full lg:w-[1280px] flex flex-col gap-12 lg:gap-36 sm:p-8 2xl:p-16">
          <section id="section-apresentacao" className="flex flex-col-reverse sm:flex-row lg:justify-between h-screen items-center justify-center gap-16">
            <div id="texto-apresentacao" className="flex flex-col gap-4 md:w-full">
              <h2 className="text-5xl md:text-7xl lg:text-9xl"><b>{t("apresentacao1")}</b></h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl text-neutral-800 text-nowrap">{t("apresentacao2")} <b>{t("nome")}</b></h3>
              <h4 className="text-2xl md:text-4xl lg:text-5xl text-neutral-600">{t("apresentacao3")} <b><span className="text-green-700">{t("apresentacao4")}</span></b>!</h4>
            </div>
            <Image alt="" src={imagem} width={600} height={600} className="rounded-full overflow-hidden shadow-lg"></Image>
          </section>
          <section id="section-habilidades" className="w-full flex items-center sm:items-start sm:flex-row flex-col justify-between -mt-32 sm:-mt-36 lg:-mt-56 gap-12">
            <div id="habilidades" className="flex flex-col gap-4 flex-1 w-full">
              <h3 className="text-neutral-800 text-2xl md:text-5xl sm:text-left"><b>{t("habilidades")}</b></h3>
              {habilidades.map((habilidade) => {
                return <div key={habilidade.tipo} className="flex flex-col lg:flex-row gap-4 ">
                  <h4 className="text-base font-bold md:text-2xl">{t(habilidade.tipo)}</h4>
                  <div className="habilidade-container flex gap-4">
                  {habilidade.valores?.map((valor) => {
                    return <p key={valor} className="text-neutral-600 text-base md:text-lg">{valor}</p>
                  })}
                  </div>
                </div>
              })}
            </div>
            <div id="linguagens" className="w-full flex flex-col gap-4 flex-1 ">
              <h3 className="text-neutral-800 text-2xl md:text-5xl "><b>{t("linguagens")}</b></h3>
              <LanguageContainer lingua={t("portugues")} nivel={t("nativo")} className="bg-green-50" bandeira={Brazil}/>
              <LanguageContainer lingua={t("ingles")} nivel={t("avancado")} className="bg-blue-50" bandeira={Uk}/>
              <LanguageContainer lingua={t("espanhol")} nivel={t("basico")} className="bg-yellow-50" bandeira={Spain}/>
            </div>
          </section>

          <section id="section-projetos" className="flex flex-col justify-between gap-8">
            <h3 className="text-neutral-800 text-2xl md:text-5xl text-center sm:text-left"><b>{t("projetos")}</b></h3>
            <div className="content-holder h-[695px] w-full relative overflow-hidden rounded-3xl shadow-2xl">
              <CarrosselProjetos/>
            </div>
          </section>

          <section id="section-contato" className="flex lg:flex-row flex-col h-screen justify-evenly items-center">
              <div id="contato-texto" className="flex flex-col gap-4 sm:flex-1">
                <h2 className="text-5xl md:text-7xl lg:text-9xl"><b>{t("conclusao1")}</b></h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-neutral-800">{t("conclusao2")}</h3>
                <h4 className="text-2xl md:text-4xl lg:text-5xl text-neutral-600">{t("conclusao3")}</h4>
              </div>
              <div id="contatos" className="sm:flex-1 gap-4 flex flex-col items-end w-full">
                <Button className="bg-blue-100 w-full lg:w-[400px] text-left px-6 py-4" icone={LinkedIn} href="https://www.linkedin.com/in/luis-eduardo-832957265/">LinkedIn</Button>
                <Button className="bg-green-100 w-full lg:w-[400px] text-left px-6 py-4" icone={Whatsapp} href="https://api.whatsapp.com/send?phone=5121980863457" hrefCelular="whatsapp://send?phone=5121980863457">Whatsapp</Button>
                <Button className="lg:w-[400px] w-full text-left px-6 py-4 bg-neutral-100" icone={Email} href="mailto:luis10barbo2020@gmail.com">E-mail</Button>
                <Button className="lg:w-[400px] w-full text-left px-6 py-4 bg-neutral-100" icone={Cellphone} copiarTexto="51 21980863457">{t("copiarNumeroCelular")}</Button>
              </div>
          </section>
        </div>
      </main>
      
    </>
  );
}
