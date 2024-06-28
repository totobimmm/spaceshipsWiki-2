"use client";
import Link from "next/link";
import Image from "next/image";
import Loading from "./components/Loading";
import React from "react";
import SpaceshipsMap from "./components/spaceshipsMap";
import navElements from "./components/nav_links";

export default function Home(): JSX.Element {
	const [isLoading, setIsLoading] = React.useState(true);
	React.useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	const Header = (): JSX.Element => (
		<header className=' absolute z-10 bg-[#121012] w-full '>
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
		<main className='flex flex-col items-center justify-center mi-h-screen w-full'>
			<div className='bg-[url("https://twist-tales.com/wp-content/uploads/2023/09/Cometh-Cosmik-Battle-Title-16-9.png")] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center '>
				<Image
					src='/cosmik-battle.avif'
					className=' w-1/2 '
					width={1200}
					height={1200}
					alt=''
				/>
			</div>
			<SpaceshipsMap />
		</main>
	);

	return (
		<div className='bg-[#121012]'>
			{isLoading && <Loading />}
			<Header />
			<Main />
		</div>
	);
}
