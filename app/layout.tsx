import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import { roboto } from "./fonts";

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
        <main className="tra h-screen w-full bg-black/50">{children}</main>
       
      </body>
    </html>
  );
}
