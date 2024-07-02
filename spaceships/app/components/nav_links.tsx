import Link from "next/link";

export const NAV_LINKS: { href: string; label?: string; icon?: string }[] = [
	{
		href: "https://theoddelor.eu/my-pages",
		label: "HOME",
		icon: "https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a79b3795b03a80f4296400_icon-png-cropped-p-500.png",
	},
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
