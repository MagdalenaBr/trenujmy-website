import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Header from "./_components/Header";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Trenuj|My",
    default: "Trenuj|My",
  },
  description: "Dołącz do naszej siłowni i osiągnij swój cel! Oferujemy szeroki wybór sprzętu, profesjonalne treningi i przyjazną atmosferę. Sprawdź naszą ofertę i zacznij swoją przygodę z aktywnością fizyczną już teraz!"
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
        <Toaster />
        <Header />

        <main className="tra h-screen w-full bg-black/30">{children}</main>
      </body>
    </html>
  );
}
