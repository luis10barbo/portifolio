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


export default function Home() {
  const habilidades: {tipo: string, valores?: string[]}[] = [
    {tipo: "Linguagens", valores: ["Python", "Typescript", "Java", "PHP"]},
    {tipo: "Frameworks", valores: ["Springboot", "React", "Express", "NextJS"]},
    {tipo: "Banco de Dados", valores: ["SQL (SQLite, PostgreSQL, MySQL)"]},
    {tipo: "Versionamento", valores: ["Git", "Github", "Gitlab"]},
    {tipo: "Sistemas Operacionais", valores: ["Windows", "Linux"]}
  ]

  return (
    <>
      <main className="flex justify-center overflow-x-hidden">
        <div className="page-content  w-[333px] sm:w-full lg:w-[1280px] flex flex-col gap-12 lg:gap-36 sm:p-8 2xl:p-16">
          <section id="section-apresentacao" className="flex flex-col-reverse sm:flex-row lg:justify-between h-screen items-center justify-center gap-16">
            <div id="texto-apresentacao" className="flex flex-col gap-4 md:w-full">
              <h2 className="text-5xl md:text-7xl lg:text-9xl"><b>Olá,</b></h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl text-neutral-800 text-nowrap">Eu sou <b>Luís Eduardo</b></h3>
              <h4 className="text-2xl md:text-4xl lg:text-5xl text-neutral-600">Seu futuro <b><span className="text-green-700">desenvolvedor</span></b>!</h4>
            </div>
            <Image alt="" src={imagem} width={600} height={600} className="rounded-full overflow-hidden shadow-lg"></Image>
          </section>
          <section id="section-habilidades" className="w-full flex items-center sm:items-start sm:flex-row flex-col justify-between -mt-32 sm:-mt-36 lg:-mt-56 gap-12">
            <div id="habilidades" className="flex flex-col gap-4 flex-1 w-full">
              <h3 className="text-neutral-800 text-2xl md:text-5xl sm:text-left"><b>Habilidades</b></h3>
              {habilidades.map((habilidade) => {
                return <div key={habilidade.tipo} className="flex flex-col lg:flex-row gap-4 ">
                  <h4 className="text-base font-bold md:text-2xl">{habilidade.tipo}</h4>
                  <div className="habilidade-container flex gap-4">
                  {habilidade.valores?.map((valor) => {
                    return <p key={valor} className="text-neutral-600 text-base md:text-lg">{valor}</p>
                  })}
                  </div>
                </div>
              })}
            </div>
            <div id="linguagens" className="w-full flex flex-col gap-4 flex-1 ">
              <h3 className="text-neutral-800 text-2xl md:text-5xl "><b>Linguagens</b></h3>
              <LanguageContainer lingua="Português" nivel="Nativo" className="bg-green-50" bandeira={Brazil}/>
              <LanguageContainer lingua="Inglês" nivel="Avançado" className="bg-blue-50" bandeira={Uk}/>
              <LanguageContainer lingua="Espanhol" nivel="Básico" className="bg-yellow-50" bandeira={Spain}/>
            </div>
          </section>

          <section id="section-projetos" className="flex flex-col justify-between gap-8">
            <h3 className="text-neutral-800 text-2xl md:text-5xl text-center sm:text-left"><b>Projetos</b></h3>
            <div className="content-holder h-[695px] w-full relative overflow-hidden rounded-3xl shadow-2xl">
              <CarrosselProjetos/>
            </div>
          </section>

          <section id="section-contato" className="flex lg:flex-row flex-col h-screen justify-evenly">
              <div id="contato-texto" className="flex flex-col gap-4 sm:flex-1">
                <h2 className="text-5xl md:text-7xl lg:text-9xl"><b>Eai,</b></h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-neutral-800">Se interessou?</h3>
                <h4 className="text-2xl md:text-4xl lg:text-5xl text-neutral-600">Entre em contato comigo :)</h4>
              </div>
              <div id="contatos" className="sm:flex-1 gap-4 flex flex-col items-end w-full">
                <Button className="bg-blue-100 w-full lg:w-[400px] text-left px-6 py-4" icone={LinkedIn} href="https://www.linkedin.com/in/luis-eduardo-832957265/">LinkedIn</Button>
                <Button className="bg-green-100 w-full lg:w-[400px] text-left px-6 py-4" icone={Whatsapp} href="https://api.whatsapp.com/send?phone=5121980863457" hrefCelular="whatsapp://send?phone=5121980863457">Whatsapp</Button>
                <Button className="lg:w-[400px] w-full text-left px-6 py-4 bg-neutral-200" icone={Email} href="mailto:luis10barbo2020@gmail.com">E-mail</Button>
                <Button className="lg:w-[400px] w-full text-left px-6 py-4 bg-neutral-100" icone={Cellphone} copiarTexto="51 21980863457">Copiar número de celular</Button>
              </div>
          </section>
        </div>
      </main>
      
    </>
  );
}
