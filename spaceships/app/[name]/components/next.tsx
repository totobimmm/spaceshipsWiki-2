import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import spaceships from "@/app/spaceships";
import { usePathname } from "next/navigation";

const Next = (): JSX.Element => {
	const name = usePathname().substring(1);
	const spaceship = spaceships.find((ship) => ship.href === name);
	return (
		<Link
			href={`/${
				spaceship && spaceship.id === 69
					? "Mule"
					: spaceship && spaceship.id === 1000
					? "Jumper"
					: spaceship && spaceships[spaceship.id + 1].href
			}`}
			className=' fixed right-8 bottom-8 flex items-start gap-3 drop-shadow-[2.5px_0_60px_rgba(255,255,255,1)] '
		>
			<button
				onMouseEnter={() => {
					const arrowRight: HTMLElement | null =
						document.getElementById("arrow");
					if (arrowRight) {
						arrowRight.style.translate = "5px";
					}
				}}
				onMouseLeave={() => {
					const arrowRight: HTMLElement | null =
						document.getElementById("arrow");
					if (arrowRight) {
						arrowRight.style.translate = "0px";
					}
				}}
				className={` w-[85px] bg-white text-black p-2 rounded-md `}
			>
				Next
			</button>
			<FaArrowRightLong id='arrow' className=' duration-300 text-white ' />
		</Link>
	);
};

export default Next;
