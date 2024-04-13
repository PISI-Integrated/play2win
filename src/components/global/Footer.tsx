"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
	const pathName = usePathname();
	return (
		<footer
			className={`${
				pathName.includes("terms") || pathName.includes("privacy")
					? "hidden"
					: "flex"
			} w-full h-[300px] bg-[#070B36] px-[20px] xl:px-[60px] py-[40px] `}
		>
			<div className="flex flex-col gap-2">
				<div>
					<Image
						src="/Logo.png"
						width={69}
						height={47}
						className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
						alt="Logo"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
