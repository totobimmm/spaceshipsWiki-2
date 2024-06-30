"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navItemVariants = {
	hover: {
		scale: 1.05,
		transition: {
			type: "spring",
			stiffness: 300,
		},
	},
};

const SecNavLink = ({
	href,
	text,
	icon,
	className,
	divClassName,
}: {
	href: string;
	text: string;
	icon: string;
	className: string;
	divClassName: string;
}): JSX.Element => {
	return (
		<motion.div
			variants={navItemVariants}
			whileHover='hover'
			className={`${divClassName}max-sm:h-7 text-2xl flex text-center justify-center items-center hover:text-yellow-100 w-full my-2 `}
		>
			<Link
				href={href}
				className={`${className} flex items-center justify-center max-sm:text-sm`}
			>
				{icon ? (
					<img
						width={35}
						height={35}
						alt='icon'
						src={`https://cdn.prod.website-files.com/659d7bdc74363cd63d1a332c/65a79b3795b03a80f4296400_icon-png-cropped-p-500.png`}
					/>
				) : (
					<motion.div
						initial={{
							opacity: 0.8,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
						whileHover={{ opacity: 1 }}
					>
						{text}
					</motion.div>
				)}
			</Link>
		</motion.div>
	);
};

export default SecNavLink;
