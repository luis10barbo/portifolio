import { projetos } from "@/data/data"
// import Image from "next/image";

export default async function ProjetoPage({params}: {params: Promise<{id: string}>}) {
    const paramsAwaited = await params;
    console.log(paramsAwaited);
    const projeto = projetos.find((projeto) => {
        if (projeto.id === paramsAwaited.id) return true;
        return false;
    });
    if (!projeto) {
        return <></>;
    }
    return <div className="mt-28 p-4 lg:w-[1280px]">
        <h2 className="text-7xl">{projeto.titulo}</h2>
        PAGINA EM CONSTRUCAO
        {/* <Image src={projeto.imgProjeto[0]} width={1920} height={1080}  alt="imagem projeto"/> */}
    </div>
}