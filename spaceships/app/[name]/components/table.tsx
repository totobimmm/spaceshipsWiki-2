import React from "react";
import spaceships from "@/app/spaceships";
import { usePathname } from "next/navigation";

const Table = (): JSX.Element => {
	const name = usePathname().substring(1);
	const spaceship = spaceships.find((ship) => ship.href === name);

	return (
		<div className=' text-center flex flex-col gap-4 max-sm:gap-2 '>
			<p className=' text-3xl max-sm:text-2xl font-bold '>Specifications</p>
			{spaceship && (
				<>
					<p className=' md:text-2xl max-sm:text-xl '>
						model: {spaceship.name}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Manufacturer: {spaceship.manufacturer}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Primary Color: {spaceship.primaryColor}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Secondary Color: {spaceship.secondaryColor}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Current Owner: {spaceship.currentOwner}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Status: {spaceship.status}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Primary Use: {spaceship.primaryUse}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Length: {spaceship.length}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Width: {spaceship.width}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Height: {spaceship.height}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Top Speed: {spaceship.topSpeed}
					</p>
					<p className=' md:text-2xl max-sm:text-xl '>Crew: {spaceship.crew}</p>
					<p className=' md:text-2xl max-sm:text-xl '>
						Weapons: {spaceship.weapons}
					</p>{" "}
				</>
			)}
		</div>
	);
};

export default Table;
