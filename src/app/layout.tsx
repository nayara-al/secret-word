import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qual é a palavra secreta?",
  description: "Tente adivinhar uma palavra sorteada dentro uma lista selecionada e acumule pontos até finalizar suas tentativas!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="gap-4 p-6 max-md:p-2 flex flex-col items-center justify-center text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
