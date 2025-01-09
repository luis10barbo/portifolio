import Image from "next/image";
import imagem from "@/../public/yo.jpg"
import Button from "@/components/Button";
import LanguageContainer from "@/components/LanguageContainer";

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
        <div className="page-content w-[1280px] flex flex-col gap-36">
          <section id="section-apresentacao" className="flex justify-between h-screen items-center">
            <div id="texto-apresentacao" className="flex flex-col gap-4">
              <h2 className="text-9xl"><b>Olá,</b></h2>
              <h3 className="text-7xl text-neutral-800">Eu sou <b>Luís Eduardo</b></h3>
              <h4 className="text-5xl text-neutral-600">Seu futuro <span className="text-green-700">desenvolvedor</span>.</h4>
            </div>
            <Image alt="" src={imagem} width={400} height={400} className="rounded-full overflow-hidden shadow-lg"></Image>
          </section>
          <section id="section-habilidades" className="flex justify-between -mt-56">
            <div id="habilidades" className="flex flex-col gap-4 flex-1">
              <h3 className="text-neutral-800 text-5xl"><b>Habilidades</b></h3>
              {habilidades.map((habilidade) => {
                return <div key={habilidade.tipo} className="flex gap-4 items-center">
                  <h4 className="text-2xl">{habilidade.tipo}</h4>
                  {habilidade.valores?.map((valor) => {
                    return <p key={valor} className="text-neutral-600 text-lg">{valor}</p>
                  })}
                </div>
              })}
            </div>
            <div id="linguagens" className="flex flex-col gap-4 flex-1">
              <h3 className="text-neutral-800 text-5xl"><b>Linguagens</b></h3>
              <LanguageContainer lingua="Português" nivel="Nativo" className="bg-green-50"/>
              <LanguageContainer lingua="Inglês" nivel="Avançado" className="bg-blue-50"/>
              <LanguageContainer lingua="Espanhol" nivel="Básico" className="bg-yellow-50"/>
            </div>
          </section>

          <section id="section-projetos" className="flex flex-col justify-between gap-8">
            <h3 className="text-neutral-800 text-5xl"><b>Projetos</b></h3>
            <div className="content-holder h-[695px] w-full relative">
              <div className="h-[695px] w-full bg-black absolute"></div>
              <div className="h-[695px] w-full bg-neutral-800 absolute" style={{transform:"translateX(-100%)"}}></div>
              <div className="h-[695px] w-full bg-neutral-800 absolute" style={{transform:"translateX(100%)"}}></div>
            </div>
            
          </section>

          <section id="section-contato" className="flex h-screen items-center">
              <div id="contato-texto" className="flex flex-col gap-4 flex-1">
                <h2 className="text-9xl"><b>Eai,</b></h2>
                <h3 className="text-7xl text-neutral-800">Se interessou?</h3>
                <h4 className="text-5xl text-neutral-600">Entre em contato comigo :)</h4>
              </div>
              
              <div id="contatos" className="flex-1 gap-4 flex flex-col items-end">
                <Button className="bg-blue-100 w-[400px] text-left px-6 py-4">LinkedIn</Button>
                <Button className="bg-green-100 w-[400px] text-left px-6 py-4">Whatsapp</Button>
                <Button className="w-[400px] text-left px-6 py-4">E-mail</Button>

              </div>
          </section>
        </div>
      </main>
      
    </>
  );
}
