import Link from "next/link";

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

export default navElements;
