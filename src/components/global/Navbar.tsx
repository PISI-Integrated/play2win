"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
	ChevronDown,
	MinusIcon,
	PlusIcon,
	SearchIcon,
	XIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Dialog, Transition } from "@headlessui/react";
import SignUpContent from "../auth/SignUpContent";
import SignInContent from "../auth/SignInContent";
import VerifyOTP from "../auth/VerifyOTP";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CustomButton from "../CustomButton";
import PotentialContainer from "../PotentialContainer";
import FinancialContent from "../modal-content/FinancialContent";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services";
// border border-solid border-[#FFFFFF33] bg-gradient-to-br from-[#E863E833] via-[#72307100] to-[#0C0E45] bg-cover bg-no-repeat bg-fixed shadow-[#FFFFFF1A] bg-blur

type Props = {};

const Navbar = (props: Props) => {
	const pathName = usePathname();
	const router = useRouter();
	let [isOpen, setIsOpen] = useState(false);
	let [isOpen2, setIsOpen2] = useState(false);
	let [isOpen3, setIsOpen3] = useState(false);
	let [isPay, setIsPay] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function closeModal2() {
		setIsOpen2(false);
	}
	function closeModal3() {
		setIsOpen3(false);
	}
	function closePayModal() {
		setIsPay(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	function openModal2() {
		setIsOpen2(true);
	}
	function openModal3() {
		setIsOpen3(true);
	}
	function openPayModal() {
		setIsPay(true);
	}

	const { data } = useQuery({
		queryKey: ["user"],
		queryFn: getMe,
	});

	// fixed inset-0 z-20
	return (
		<nav className="">
			<div className=" flex items-center justify-between xl:gap-11 py-4 md:py-8 ">
				<Link
					href="/"
					className="hidden md:flex cursor-pointer flex-col gap-2"
				>
					<div>
						<Image
							src="/Logo.svg"
							width={69}
							height={47}
							className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
							alt="Logo"
						/>
					</div>
				</Link>
				<Sheet>
					<SheetTrigger asChild>
						<div className="flex md:hidden flex-col gap-2">
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
					</SheetTrigger>
					<SheetContent className="gradient">
						<div className="w-full grid gap-4">
							{/* <div className="flex items-center gap-2">
								<Avatar className="w-[60px] h-[60px]">
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div>
									<h1 className="text-white dark:text-white text-sm md:text-base font-medium">
										Joseph Keswet
									</h1>
									<p className="text-[10px]  text-[#8D91BB] font-medium">
										ID: <span className="text-xs  text-[#8D91BB]">SL78903</span>
									</p>
								</div>
							</div> */}

							<div className="w-full flex flex-col gap-2">
								<div className="flex items-center justify-between">
									<h1 className="text-[#CCB7E6] dark:text-white text-xs md:text-sm font-medium">
										Available balance:
									</h1>
									<p className="text-sm text-white font-medium">
										₦{data?.wallet_balance}
									</p>
								</div>
								<div className="w-full flex items-center gap-2">
									<Button
										onClick={openPayModal}
										className=" uppercase  text-xs text-white font-NunitoSans font-bold  primary-color rounded-full w-full h-[32px]"
									>
										<PlusIcon className="w-6 h-6 " />
										Add money
									</Button>
									<Button
										onClick={openPayModal}
										className="bg-[#E903E733] rounded-[100px] w-full h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
									>
										Withdraw
										<MinusIcon className="w-6 h-6 " />
									</Button>
								</div>
								<div className="w-full">
									<SheetTrigger asChild>
										<Link
											href="/"
											className="w-full h-[32px] p-2"
										>
											<div className="flex items-center gap-2 ">
												{/* <svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.33301 15.6765V4.1665C3.33301 2.78579 4.4523 1.6665 5.83301 1.6665H14.1663C15.5471 1.6665 16.6663 2.78579 16.6663 4.1665V15.6765C16.6663 17.2799 14.9789 18.3228 13.5448 17.6057C13.404 17.5353 13.256 17.4806 13.1033 17.4424L10.606 16.8181C10.2079 16.7186 9.79144 16.7186 9.39334 16.8181L6.89604 17.4424C6.74337 17.4806 6.59533 17.5353 6.45457 17.6057C5.02041 18.3228 3.33301 17.2799 3.33301 15.6765ZM6.66634 4.99984C6.2061 4.99984 5.83301 5.37293 5.83301 5.83317C5.83301 6.29341 6.2061 6.6665 6.66634 6.6665H13.333C13.7932 6.6665 14.1663 6.29341 14.1663 5.83317C14.1663 5.37293 13.7932 4.99984 13.333 4.99984H6.66634ZM5.83301 9.99984C5.83301 9.5396 6.2061 9.1665 6.66634 9.1665H13.333C13.7932 9.1665 14.1663 9.5396 14.1663 9.99984C14.1663 10.4601 13.7932 10.8332 13.333 10.8332H6.66634C6.2061 10.8332 5.83301 10.4601 5.83301 9.99984ZM6.66634 13.3332C6.2061 13.3332 5.83301 13.7063 5.83301 14.1665C5.83301 14.6267 6.2061 14.9998 6.66634 14.9998H8.88856C9.3488 14.9998 9.7219 14.6267 9.7219 14.1665C9.7219 13.7063 9.3488 13.3332 8.88856 13.3332H6.66634ZM11.1108 13.3332C10.6505 13.3332 10.2775 13.7063 10.2775 14.1665C10.2775 14.6267 10.6505 14.9998 11.1108 14.9998H13.333C13.7932 14.9998 14.1663 14.6267 14.1663 14.1665C14.1663 13.7063 13.7932 13.3332 13.333 13.3332H11.1108Z"
													fill="white"
												/>
											</svg> */}
												<h1 className="text-white">Home</h1>
											</div>
										</Link>
									</SheetTrigger>
									<SheetTrigger asChild>
										<Link
											href="/terms-conditions"
											className="w-full h-[32px] p-2"
										>
											<div className="flex items-center gap-2 ">
												{/* <svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.33301 15.6765V4.1665C3.33301 2.78579 4.4523 1.6665 5.83301 1.6665H14.1663C15.5471 1.6665 16.6663 2.78579 16.6663 4.1665V15.6765C16.6663 17.2799 14.9789 18.3228 13.5448 17.6057C13.404 17.5353 13.256 17.4806 13.1033 17.4424L10.606 16.8181C10.2079 16.7186 9.79144 16.7186 9.39334 16.8181L6.89604 17.4424C6.74337 17.4806 6.59533 17.5353 6.45457 17.6057C5.02041 18.3228 3.33301 17.2799 3.33301 15.6765ZM6.66634 4.99984C6.2061 4.99984 5.83301 5.37293 5.83301 5.83317C5.83301 6.29341 6.2061 6.6665 6.66634 6.6665H13.333C13.7932 6.6665 14.1663 6.29341 14.1663 5.83317C14.1663 5.37293 13.7932 4.99984 13.333 4.99984H6.66634ZM5.83301 9.99984C5.83301 9.5396 6.2061 9.1665 6.66634 9.1665H13.333C13.7932 9.1665 14.1663 9.5396 14.1663 9.99984C14.1663 10.4601 13.7932 10.8332 13.333 10.8332H6.66634C6.2061 10.8332 5.83301 10.4601 5.83301 9.99984ZM6.66634 13.3332C6.2061 13.3332 5.83301 13.7063 5.83301 14.1665C5.83301 14.6267 6.2061 14.9998 6.66634 14.9998H8.88856C9.3488 14.9998 9.7219 14.6267 9.7219 14.1665C9.7219 13.7063 9.3488 13.3332 8.88856 13.3332H6.66634ZM11.1108 13.3332C10.6505 13.3332 10.2775 13.7063 10.2775 14.1665C10.2775 14.6267 10.6505 14.9998 11.1108 14.9998H13.333C13.7932 14.9998 14.1663 14.6267 14.1663 14.1665C14.1663 13.7063 13.7932 13.3332 13.333 13.3332H11.1108Z"
													fill="white"
												/>
											</svg> */}
												<h1 className="text-white">Terms & Conditions</h1>
											</div>
										</Link>
									</SheetTrigger>
									<SheetTrigger asChild>
										<Link
											href="/privacy-policy"
											className="w-full h-[32px] p-2"
										>
											<div className="flex items-center gap-2 ">
												{/* <svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.33301 15.6765V4.1665C3.33301 2.78579 4.4523 1.6665 5.83301 1.6665H14.1663C15.5471 1.6665 16.6663 2.78579 16.6663 4.1665V15.6765C16.6663 17.2799 14.9789 18.3228 13.5448 17.6057C13.404 17.5353 13.256 17.4806 13.1033 17.4424L10.606 16.8181C10.2079 16.7186 9.79144 16.7186 9.39334 16.8181L6.89604 17.4424C6.74337 17.4806 6.59533 17.5353 6.45457 17.6057C5.02041 18.3228 3.33301 17.2799 3.33301 15.6765ZM6.66634 4.99984C6.2061 4.99984 5.83301 5.37293 5.83301 5.83317C5.83301 6.29341 6.2061 6.6665 6.66634 6.6665H13.333C13.7932 6.6665 14.1663 6.29341 14.1663 5.83317C14.1663 5.37293 13.7932 4.99984 13.333 4.99984H6.66634ZM5.83301 9.99984C5.83301 9.5396 6.2061 9.1665 6.66634 9.1665H13.333C13.7932 9.1665 14.1663 9.5396 14.1663 9.99984C14.1663 10.4601 13.7932 10.8332 13.333 10.8332H6.66634C6.2061 10.8332 5.83301 10.4601 5.83301 9.99984ZM6.66634 13.3332C6.2061 13.3332 5.83301 13.7063 5.83301 14.1665C5.83301 14.6267 6.2061 14.9998 6.66634 14.9998H8.88856C9.3488 14.9998 9.7219 14.6267 9.7219 14.1665C9.7219 13.7063 9.3488 13.3332 8.88856 13.3332H6.66634ZM11.1108 13.3332C10.6505 13.3332 10.2775 13.7063 10.2775 14.1665C10.2775 14.6267 10.6505 14.9998 11.1108 14.9998H13.333C13.7932 14.9998 14.1663 14.6267 14.1663 14.1665C14.1663 13.7063 13.7932 13.3332 13.333 13.3332H11.1108Z"
													fill="white"
												/>
											</svg> */}
												<h1 className="text-white">Privacy Policy</h1>
											</div>
										</Link>
									</SheetTrigger>
									<SheetTrigger asChild>
										<Link
											href="/about"
											className="w-full h-[32px] p-2"
										>
											<div className="flex items-center gap-2 ">
												{/* <svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.33301 15.6765V4.1665C3.33301 2.78579 4.4523 1.6665 5.83301 1.6665H14.1663C15.5471 1.6665 16.6663 2.78579 16.6663 4.1665V15.6765C16.6663 17.2799 14.9789 18.3228 13.5448 17.6057C13.404 17.5353 13.256 17.4806 13.1033 17.4424L10.606 16.8181C10.2079 16.7186 9.79144 16.7186 9.39334 16.8181L6.89604 17.4424C6.74337 17.4806 6.59533 17.5353 6.45457 17.6057C5.02041 18.3228 3.33301 17.2799 3.33301 15.6765ZM6.66634 4.99984C6.2061 4.99984 5.83301 5.37293 5.83301 5.83317C5.83301 6.29341 6.2061 6.6665 6.66634 6.6665H13.333C13.7932 6.6665 14.1663 6.29341 14.1663 5.83317C14.1663 5.37293 13.7932 4.99984 13.333 4.99984H6.66634ZM5.83301 9.99984C5.83301 9.5396 6.2061 9.1665 6.66634 9.1665H13.333C13.7932 9.1665 14.1663 9.5396 14.1663 9.99984C14.1663 10.4601 13.7932 10.8332 13.333 10.8332H6.66634C6.2061 10.8332 5.83301 10.4601 5.83301 9.99984ZM6.66634 13.3332C6.2061 13.3332 5.83301 13.7063 5.83301 14.1665C5.83301 14.6267 6.2061 14.9998 6.66634 14.9998H8.88856C9.3488 14.9998 9.7219 14.6267 9.7219 14.1665C9.7219 13.7063 9.3488 13.3332 8.88856 13.3332H6.66634ZM11.1108 13.3332C10.6505 13.3332 10.2775 13.7063 10.2775 14.1665C10.2775 14.6267 10.6505 14.9998 11.1108 14.9998H13.333C13.7932 14.9998 14.1663 14.6267 14.1663 14.1665C14.1663 13.7063 13.7932 13.3332 13.333 13.3332H11.1108Z"
													fill="white"
												/>
											</svg> */}
												<h1 className="text-white">About Us</h1>
											</div>
										</Link>
									</SheetTrigger>
									<SheetTrigger asChild>
										<Link
											href="/help"
											className="w-full h-[32px] p-2"
										>
											<div className="flex items-center gap-2 ">
												{/* <svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3.33301 15.6765V4.1665C3.33301 2.78579 4.4523 1.6665 5.83301 1.6665H14.1663C15.5471 1.6665 16.6663 2.78579 16.6663 4.1665V15.6765C16.6663 17.2799 14.9789 18.3228 13.5448 17.6057C13.404 17.5353 13.256 17.4806 13.1033 17.4424L10.606 16.8181C10.2079 16.7186 9.79144 16.7186 9.39334 16.8181L6.89604 17.4424C6.74337 17.4806 6.59533 17.5353 6.45457 17.6057C5.02041 18.3228 3.33301 17.2799 3.33301 15.6765ZM6.66634 4.99984C6.2061 4.99984 5.83301 5.37293 5.83301 5.83317C5.83301 6.29341 6.2061 6.6665 6.66634 6.6665H13.333C13.7932 6.6665 14.1663 6.29341 14.1663 5.83317C14.1663 5.37293 13.7932 4.99984 13.333 4.99984H6.66634ZM5.83301 9.99984C5.83301 9.5396 6.2061 9.1665 6.66634 9.1665H13.333C13.7932 9.1665 14.1663 9.5396 14.1663 9.99984C14.1663 10.4601 13.7932 10.8332 13.333 10.8332H6.66634C6.2061 10.8332 5.83301 10.4601 5.83301 9.99984ZM6.66634 13.3332C6.2061 13.3332 5.83301 13.7063 5.83301 14.1665C5.83301 14.6267 6.2061 14.9998 6.66634 14.9998H8.88856C9.3488 14.9998 9.7219 14.6267 9.7219 14.1665C9.7219 13.7063 9.3488 13.3332 8.88856 13.3332H6.66634ZM11.1108 13.3332C10.6505 13.3332 10.2775 13.7063 10.2775 14.1665C10.2775 14.6267 10.6505 14.9998 11.1108 14.9998H13.333C13.7932 14.9998 14.1663 14.6267 14.1663 14.1665C14.1663 13.7063 13.7932 13.3332 13.333 13.3332H11.1108Z"
													fill="white"
												/>
											</svg> */}
												<h1 className="text-white">Help</h1>
											</div>
										</Link>
									</SheetTrigger>
								</div>
							</div>
						</div>
					</SheetContent>
				</Sheet>
				<div className="flex xl:flex-1 items-center justify-between">
					<div className="hidden md:flex items-center gap-4 text-white">
						<Link
							href="/"
							className="cool-hover cursor-pointer"
						>
							<p className="font-semibold ">Home</p>
							<div
								className={` ${
									pathName === "/" ? "flex" : "hidden"
								} h-[5px] rounded-[5px]  bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
						<Link
							href="/terms-conditions"
							className="cool-hover cursor-pointer"
						>
							<p className=" font-semibold">Terms & Conditions</p>
							<div
								className={`${
									pathName === "/terms-conditions" ? "flex" : "hidden"
								} h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
						<Link
							href="/privacy-policy"
							className="cool-hover cursor-pointer"
						>
							<p className=" font-semibold">Privacy policy</p>
							<div
								className={`${
									pathName === "/privacy-policy" ? "flex" : "hidden"
								} h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
						<Link
							href="/about"
							className="cool-hover cursor-pointer"
						>
							<p className=" font-semibold">About Us</p>
							<div
								className={`${
									pathName === "/about" ? "flex" : "hidden"
								} h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
						<Link
							href="/help"
							className="cool-hover cursor-pointer"
						>
							<p className=" font-semibold">Help</p>
							<div
								className={`${
									pathName === "/help" ? "flex" : "hidden"
								} h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
							/>
						</Link>
					</div>
					<div className="flex items-center gap-2">
						{/* <div className="hidden xl:flex xl:relative h-11">
							<Input
								type="text"
								className="w-full lg:w-[400px] rounded-[100px] bg-[#FFFFFF1A] backdrop-blur-[5px] text-white"
								placeholder="Search"
							/>
							<SearchIcon className="absolute top-2 right-4 text-white" />
						</div>
						<div className="flex md:hidden items-center  justify-center w-11 h-11 border rounded-full">
							<SearchIcon className=" text-white" />
						</div> */}
						<Popover>
							{data ? (
								<PopoverTrigger
									className=" cursor-pointer"
									asChild
								>
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage
												src="https://github.com/shadcn.pn"
												alt="@shadcn"
											/>
											<AvatarFallback>
												{data?.username?.split("")[0]}
											</AvatarFallback>
										</Avatar>
									</div>
								</PopoverTrigger>
							) : null}

							<PopoverContent className="w-full md:w-full gradient rounded-[25px]">
								<div className="w-full grid gap-4">
									<div className="flex items-center gap-2">
										<Avatar className="w-[60px] h-[60px]">
											<AvatarImage
												src="https://github.com/shadcn.p"
												alt="@shadcn"
											/>
											<AvatarFallback>
												{data?.username?.split("")[0]}
											</AvatarFallback>
										</Avatar>
										<div>
											<h1 className="text-white dark:text-white text-sm md:text-base font-medium">
												{data?.username}
											</h1>
											<p className="text-[10px]  text-[#8D91BB] font-medium">
												ID:{" "}
												<span className="text-xs  text-[#8D91BB]">
													{data?.id}
												</span>
											</p>
										</div>
									</div>

									<div className="w-full flex flex-col gap-2">
										<div className="flex items-center justify-between">
											<h1 className="text-[#CCB7E6] dark:text-white text-xs md:text-sm font-medium">
												Available balance:
											</h1>
											<p className="text-sm text-white font-medium">
												₦{data?.wallet_balance}
											</p>
										</div>
										<div className="w-full flex items-center gap-2">
											<Button
												onClick={openPayModal}
												className=" uppercase  text-xs text-white font-NunitoSans font-bold  primary-color rounded-full w-full h-[32px]"
											>
												<PlusIcon className="w-6 h-6 " />
												Add money
											</Button>
											<Button
												onClick={openPayModal}
												className="bg-[#E903E733] hidden md:flex rounded-[100px] w-full h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
											>
												Withdraw
												<MinusIcon className="w-6 h-6 " />
											</Button>
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>

						{!data ? (
							<Button
								onClick={openModal}
								className=" uppercase primary-color rounded-full "
							>
								Sign up
							</Button>
						) : null}

						<Transition
							appear
							show={isOpen}
							as={Fragment}
						>
							<Dialog
								as="div"
								className="relative z-10"
								onClose={closeModal}
							>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100 "
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="fixed inset-0 bg-[#00000099]" />
								</Transition.Child>

								<div className="fixed inset-0 overflow-y-auto">
									<div className="flex min-h-full items-center justify-center p-4 text-center">
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											<Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
												<Dialog.Title
													as="div"
													className="text-lg font-medium leading-6 text-gray-900 mb-8"
												>
													<div className="flex justify-between items-center">
														<h1 className="text-[32px] text-white font-NunitoSans font-semibold">
															Create an account
														</h1>
														<XIcon className="flex md:hidden text-white" />
													</div>
												</Dialog.Title>
												<SignUpContent
													handlerFunc={() => {
														closeModal();
														openModal2();
													}}
													action={() => {
														closeModal();
														openModal3();
													}}
												/>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
						<Transition
							appear
							show={isOpen2}
							as={Fragment}
						>
							<Dialog
								as="div"
								className="relative z-10"
								onClose={closeModal2}
							>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100 "
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="fixed inset-0 bg-[#00000099]" />
								</Transition.Child>

								<div className="fixed inset-0 overflow-y-auto">
									<div className="flex min-h-full items-center justify-center p-4 text-center">
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											<Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
												<Dialog.Title
													as="div"
													className="text-lg font-medium leading-6 text-gray-900 mb-8"
												>
													<div className="flex justify-between items-center">
														<h1 className="text-[32px] text-white font-NunitoSans font-semibold">
															Sign In
														</h1>
														<XIcon className="flex md:hidden text-white" />
													</div>
												</Dialog.Title>
												<SignInContent
													handlerFunc={() => {
														openModal();
														closeModal2();
													}}
													action={() => {
														closeModal2();
													}}
												/>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
						<Transition
							appear
							show={isOpen3}
							as={Fragment}
						>
							<Dialog
								as="div"
								className="relative z-10"
								onClose={closeModal3}
							>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100 "
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="fixed inset-0 bg-[#00000099]" />
								</Transition.Child>

								<div className="fixed inset-0 overflow-y-auto">
									<div className="flex min-h-full items-center justify-center p-2 text-center">
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											<Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
												<Dialog.Title
													as="div"
													className="text-lg font-medium leading-6 text-gray-900 mb-8"
												>
													<div className="flex justify-between items-center">
														<h1 className="text-[32px] text-white font-NunitoSans font-semibold">
															Enter OTP
														</h1>
														<XIcon className="flex md:hidden text-white" />
													</div>
												</Dialog.Title>
												<VerifyOTP
													handlerFunc={() => {
														openModal();
														closeModal2();
													}}
													action={() => {
														closeModal3();
														openModal2();
													}}
												/>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
						<Transition
							appear
							show={isPay}
							as={Fragment}
						>
							<Dialog
								as="div"
								className="relative z-10"
								onClose={closePayModal}
							>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100 "
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="fixed inset-0 bg-[#00000099]" />
								</Transition.Child>

								<div className="fixed inset-0 overflow-y-auto  ">
									<div className="flex min-h-full items-center justify-center p-4 text-center ">
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											<Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
												<FinancialContent />
												{/* <SignUpContent
													handlerFunc={() => {
														closeModal();
														openModal2();
													}}
													action={() => {
														closeModal();
														openModal3();
													}}
												/> */}
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
