import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from './providers';
import "./globals.css";
import { Header } from "@/components/layout/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Gihub explorer",
  description: "explore repositórios do github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} antialiased`}
      >
          <Providers>
            <Header />
            <main className="mx-auto max-w-317.25 px-4">
              {children}
            </main>
          </Providers>
      </body>
    </html>
  );
}
