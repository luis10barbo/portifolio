import { projetos } from "@/data/data"
import Image from "next/image";

export default async function ProjetoPage({params}: {params: Promise<{id: string}>}) {
    const paramsAwaited = await params;
    const projeto = projetos.find((projeto) => {
        if (projeto.id === paramsAwaited.id) return true;
        return false;
    });
    if (!projeto) {
        return <></>;
    }
    return <div className="mt-28 py-16 lg:w-[1280px] m-auto overflow-hidden">
        <h2 className="sm:text-9xl text-5xl font-bold text-center sm:text-left">{projeto.titulo}</h2>
        <p className="text-xl sm:text-5xl text-neutral-700 pt-4 sm:text-left text-center">{projeto.descricao}</p>
        <div id="imagens" className="flex gap-4 pt-12 flex-wrap px-4">
            {projeto.imgProjeto.map((img, i) => {
                return <Image key={`img ${i}`} src={img} width={1920} height={1080} alt={`imagem projeto ${i + 1}`} className="shadow-lg rounded-lg max-h-[720px] object-contain w-fit flex-1"></Image>
            })}
        </div>
        {/* <Image src={projeto.imgProjeto[0]} width={1920} height={1080}  alt="imagem projeto"/> */}
    </div>
}