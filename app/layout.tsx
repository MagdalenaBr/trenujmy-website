import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Raleway } from "next/font/google";
import { Roboto } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

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
        className={`${roboto.className} flex min-h-screen flex-col items-center overflow-x-hidden transition-all`}
      >
        <Header />
        <main className="h-screen w-full bg-black/60 tra">{children}</main>
      </body>
    </html>
  );
}
