import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trenuj|My",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} flex h-screen w-screen justify-center overflow-hidden bg-black/40`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
