import { routing } from "@/i18n/routing";
import Button from "./Button";
import Brazil from "@/../public/bandeiras/brazil.svg"
import Uk from "@/../public/bandeiras/uk.svg"
import { useTranslations } from "next-intl";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function Header({locale}: {locale: string}) {
    const t = useTranslations('Index');
    
    return <header className="p-2 lg:p-8 flex flex-row-reverse fixed top-0 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-[60px] z-50">
        {locale === "pt" ? 
        <Link href={"/en"}>
            <Button id="language-button" className="text-base px-4 py-2 bg-green-200 border border-neutral-200 " icone={Brazil}>{t("portugues")}</Button>
        
        </Link>
    :
    <Link href={"/pt"}>
        <Button id="language-button" className="text-base px-4 py-2 bg-red-200 border border-neutral-200 " icone={Uk}>{t("ingles")}</Button>
    </Link>
    }
    </header>
}