import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {routing} from '@/i18n/routing';
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ScrollContextProvider } from "@/context/ScrollContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({weight: "variable", subsets:["latin"]})

export const metadata: Metadata = {
  title: "Portifolio Luis Eduardo",
  description: "Portifolio Luis Eduardo",
};


 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {
  const paramsAwaited = await params;
  const locale = paramsAwaited.locale;
  // eslint-disable-next-line
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang="pt">
      <body
        className={`${outfit.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ScrollContextProvider>
            <Header locale={locale}/>
            {children}
          </ScrollContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
