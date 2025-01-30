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
        <h2 className="text-9xl font-bold">{projeto.titulo}</h2>
        <p className="text-5xl text-neutral-700 pt-4">{projeto.descricao}</p>
        <div id="imagens" className="flex gap-4 pt-12 flex-wrap px-4">
            {projeto.imgProjeto.map((img, i) => {
                return <Image key={`img ${i}`} src={img} width={1920} height={1080} alt={`imagem projeto ${i + 1}`} className="shadow-lg rounded-lg max-h-[720px] object-contain w-fit"></Image>
            })}
        </div>
        {/* <Image src={projeto.imgProjeto[0]} width={1920} height={1080}  alt="imagem projeto"/> */}
    </div>
}