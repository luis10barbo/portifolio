import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export default function LanguageContainer({lingua, nivel, className, bandeira, ...otherProps}: ComponentPropsWithRef<"div"> & {lingua: string, nivel:string, bandeira?: StaticImport}) {
    return <div className={twMerge("bg-neutral-200 px-6 py-4 rounded-md flex gap-4", className)} {...otherProps}>
            {bandeira ? <Image src={bandeira} width={32} height={22} alt="teste" className="md:w-[32px] w-[16px]" /> : <></>}
            <p className="text-base md:text-xl">{lingua} <span className="text-neutral-600" >({nivel})</span></p>
        </div>

}