import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spaceships Wiki",
	description: "A wiki for Cosmik Battle: https://cosmikbattle.com",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html style={{ overflowX: "hidden" }} lang='en'>
			<head>
				<link rel='icon' href='/favicon.jpg' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
