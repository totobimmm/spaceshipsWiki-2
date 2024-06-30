import React from "react";
import SecNavLink from "./secNavLink";
import { NAV_LINKS } from "./nav_links";

const SecNavLinkMap = ({
	className,
	id,
}: {
	className: string;
	id: string;
}): JSX.Element => {
	return (
		<div id={id} className={`${className} duration-500 fixed w-full`}>
			<nav
				className={` w-full flex z-10 text-white h-screen items-center flex-col justify-center left-0 bg-[#121012] `}
			>
				{Array.isArray(NAV_LINKS) &&
					NAV_LINKS.map((link: any, index: number) => (
						<SecNavLink
							divClassName={" max-[400px]:h-7 max-[400px]:my-1 "}
							className={" max-[400px]:text-base min-[400px]:text-xl "}
							href={link.href}
							text={link.label}
							key={index}
							icon={link.icon}
						/>
					))}
			</nav>
		</div>
	);
};

export default SecNavLinkMap;
