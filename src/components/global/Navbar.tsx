"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const Navbar = (props: Props) => {
	const pathName = usePathname();
	// fixed inset-0 z-20
	return (
		<nav className="">
			<div className=" flex items-center justify-between xl:gap-11 py-4 md:py-8 ">
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
				<div className="flex xl:flex-1 items-center justify-between">
					<div className="hidden md:flex items-center gap-4 text-white">
						<Link
							href="/"
							className="cursor-pointer"
						>
							<p className="font-semibold ">Home</p>
							<div
								className={` ${
									pathName === "/" ? "flex" : "hidden"
								} h-[5px] rounded-[5px]  bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
						<Link
							href="/about"
							className="cursor-pointer"
						>
							<p className=" font-semibold">About games</p>
							<div
								className={`${
									pathName === "/about" ? "flex" : "hidden"
								} h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<div className="hidden xl:flex xl:relative h-11">
							<Input
								type="text"
								className="w-full lg:w-[400px] rounded-[100px] bg-[#FFFFFF1A] backdrop-blur-[5px] text-white"
								placeholder="Search"
							/>
							<SearchIcon className="absolute top-2 right-4 text-white" />
						</div>
						<div className="flex md:hidden items-center  justify-center w-11 h-11 border rounded-full">
							<SearchIcon className=" text-white" />
						</div>

						<Button className="uppercase primary-color rounded-full">
							Sign in
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
