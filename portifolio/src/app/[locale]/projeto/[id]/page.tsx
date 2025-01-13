import { projetos } from "@/data/data"
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjetoPage({params: {id}}: {params: {id: string}}) {
    const projeto = projetos.find((projeto) => {
        if (projeto.id === id) return true;
        return false;
    });
    if (!projeto) {
        return notFound();
    }
    return <div className="mt-28">
        <Image src={projeto.imgProjeto[0]} width={1920} height={1080}  alt="imagem projeto"/>
    </div>
}