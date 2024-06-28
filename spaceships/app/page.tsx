"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./components/Loading";
import React from "react";

export default function Home(): JSX.Element {
	const [isLoading, setIsLoading] = React.useState(true);
	React.useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 500);
		return () => clearTimeout(timer);
	}, []);

	const NAV_LINKS: { href: string; label: string }[] = [
		{ href: "https://www.cosmikbattle.com/game", label: "THE GAME" },
		{ href: "https://www.cosmikbattle.com/news", label: "NEWS" },
		{
			href: "https://www.cosmikbattle.com/cosmik-academy",
			label: "COSMIK ACADEMY",
		},
		{
			href: "https://www.cosmikbattle.com/hitmans-chest",
			label: "HITMAN'S CHEST",
		},
		{ href: "https://marketplace.cosmikbattle.com", label: "MARKETPLACE" },
	];

	const navElements: JSX.Element[] = NAV_LINKS.map((link, index) => (
		<Link
			key={index}
			className='hover:text-yellow-200 duration-500 px-4 '
			href={link.href}
		>
			{link.label}
		</Link>
	));

	const Header = (): JSX.Element => (
		<header className=' fixed z-10 bg-black w-full '>
			<nav className='flex sm:h-14 justify-center items-center gap-4 md:text-lg'>
				<Link href=''>
					<Image
						src='/page-icon.png'
						width={900}
						height={900}
						alt=''
						className='h-12 w-auto absolute left-6 top-1'
					/>
				</Link>
				{navElements}
			</nav>
		</header>
	);

	const Main = (): JSX.Element => (
		<main className='flex items-center justify-center h-screen w-full'>
			<div className='bg-[url("https://twist-tales.com/wp-content/uploads/2023/09/Cometh-Cosmik-Battle-Title-16-9.png")] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center '>
				<Image
					src='/cosmik-battle.avif'
					className=' w-1/2 '
					width={1200}
					height={1200}
					alt=''
				/>
			</div>
		</main>
	);

	return (
		<>
			{isLoading && <Loading />}
			<Header />
			<Main />
		</>
	);
}
