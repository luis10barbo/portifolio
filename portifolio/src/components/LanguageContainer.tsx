import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export default function LanguageContainer({lingua, nivel, className, ...otherProps}: ComponentPropsWithRef<"div"> & {lingua: string, nivel:string}) {
    return <div className={twMerge("bg-neutral-200 px-6 py-4 rounded-md", className)} {...otherProps}>
            <p className="text-xl">{lingua} <span className="text-neutral-600" >({nivel})</span></p>
        </div>

}