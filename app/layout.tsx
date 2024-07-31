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
		<html lang='pl'>
			<body className={inter.className}>
				<div className='bg-black/40 w-screen h-screen flex justify-center '>
					<Header />
					<main >{children}</main>
				</div>
			</body>
		</html>
	);
}
