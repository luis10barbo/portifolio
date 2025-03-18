"use client";

import { createContext, ReactNode, useState } from "react";

export type ScrollContextType = {lockScroll: () => void, unlockScroll: () => void, scrollLocked: boolean};
export const ScrollContext = createContext<ScrollContextType>(null as unknown as ScrollContextType);

export const ScrollContextProvider = ({children}: {children: ReactNode}) => {
    const [scrollLocked, setScrollLocked] = useState(false);
    function lockScroll() {
        setScrollLocked(true);
        document.body.style.overflow = "hidden";
    }
    function unlockScroll() {
        setScrollLocked(false);
        document.body.style.overflow = "auto";
    }
    return <ScrollContext.Provider value={{lockScroll, unlockScroll, scrollLocked}}>{children}</ScrollContext.Provider>
}