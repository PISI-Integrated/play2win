import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className=" w-full h-[300px] bg-[#070B36] px-[20px] xl:px-[60px] py-[40px] ">
			<div className="flex flex-col gap-2">
				<div>
					<Image
						src="/Logo.svg"
						width={69}
						height={47}
						className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
						alt="Logo"
					/>
				</div>
				<p className="text-[10px] md:text-sm text-white font-NunitoSans font-semibold">
					Play To Win
				</p>
			</div>
		</footer>
	);
};

export default Footer;
