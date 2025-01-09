import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({children, ...otherProps}: ComponentPropsWithoutRef<"button"> & {children?: string}) {
    return <button {...otherProps} className={twMerge(`px-4 py-2 text-xl bg-neutral-200 border border-neutral-300 rounded-md`, otherProps.className)}>{children}</button>
}