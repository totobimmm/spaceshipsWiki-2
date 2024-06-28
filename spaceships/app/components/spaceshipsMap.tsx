import React from "react";
import spaceships from "@/app/spaceships";
import Link from "next/link";
const SpaceshipsMap = (): JSX.Element => {
	const categorizedSpaceships = spaceships.reduce(
		(acc: { [key: string]: any[] }, spaceship: any) => {
			const manufacturer = spaceship.manufacturer;
			if (!acc[manufacturer]) {
				acc[manufacturer] = [];
			}
			acc[manufacturer].push(spaceship);
			return acc;
		},
		{}
	);

	return (
		<>
			{Object.keys(categorizedSpaceships).map((manufacturer) => (
				<div
					key={manufacturer}
					className='flex flex-col border w-full manufacturer'
				>
					<h2 className='manufacturer-title text-2xl text-center'>
						{manufacturer}
					</h2>
					<div className='text-center flex py-4 justify-center items-center flex-wrap spaceships'>
						{categorizedSpaceships[manufacturer].map((spaceship) => (
							<Link
								className='text-xl px-4 py-2 my-4 mx-2 duration-300 text-black rounded-md '
								style={{
									background: "rgba(140, 140, 140, 0.8)",
									backdropFilter: "blur(10px)",
								}}
								onMouseEnter={(e) => {
									const target = e.currentTarget as HTMLElement;
									target.style.background = "rgba(100, 100, 100, 0.8)";
									target.style.transform = "scale(1.2)";
								}}
								onMouseLeave={(e) => {
									const target = e.currentTarget as HTMLElement;
									target.style.background = "rgba(255, 255, 255, 0.8)";
									target.style.transform = "scale(1)";
									target.classList.add(
										"drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
									);
								}}
								key={spaceship.id}
								href={`/${spaceship.href}`}
							>
								{spaceship.name}
							</Link>
						))}
					</div>
				</div>
			))}
		</>
	);
};
export default SpaceshipsMap;
