import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "IT HUB POLYTECH & COMPETENCE CENTER",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#2f2178]`}
			>
				{children}
			</body>
		</html>
	);
}
