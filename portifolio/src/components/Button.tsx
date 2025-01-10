"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function InteriorBotao({
  children,
  icone,
}: {
  children?: ReactNode;
  icone?: StaticImport;
}) {
  return (
    <>
      {icone ? (
        <>
          <Image src={icone} height={32} width={32} alt="icone" />
          <span>{children}</span>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default function Button({
  children,
  icone,
  href,
  copiarTexto,
  ...otherProps
}: ComponentPropsWithoutRef<"button"> & {
  children?: ReactNode;
  icone?: StaticImport;
  href?: string;
  copiarTexto?: string;
}) {
  if (href) return (
  <a href={href} {...otherProps as ComponentPropsWithoutRef<"a">}
  className={twMerge(
    `px-4 py-2 text-xl bg-neutral-200 border border-neutral-300 rounded-md flex gap-2 items-center`,
    otherProps.className
  )}> <InteriorBotao icone={icone} />{children}</a>)
  return (
    <button
      {...otherProps}
      className={twMerge(
        `px-4 py-2 text-xl bg-neutral-200 border border-neutral-300 rounded-md flex gap-2 items-center`,
        otherProps.className
      )}
      onClick={copiarTexto ? () => {
        alert(`Texto ${copiarTexto} copiado!`)
        navigator.clipboard.writeText(copiarTexto);
      } : otherProps.onClick }
    >
      <InteriorBotao icone={icone} >{children}</InteriorBotao>
    </button>
  );
}
