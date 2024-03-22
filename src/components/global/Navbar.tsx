"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Dialog, Transition } from "@headlessui/react";
import SignUpContent from "../auth/SignUpContent";
import SignInContent from "../auth/SignInContent";
import VerifyOTP from "../auth/VerifyOTP";
// border border-solid border-[#FFFFFF33] bg-gradient-to-br from-[#E863E833] via-[#72307100] to-[#0C0E45] bg-cover bg-no-repeat bg-fixed shadow-[#FFFFFF1A] bg-blur

type Props = {};

const Navbar = (props: Props) => {
	const pathName = usePathname();
	let [isOpen, setIsOpen] = useState(false);
	let [isOpen2, setIsOpen2] = useState(false);
	let [isOpen3, setIsOpen3] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function closeModal2() {
		setIsOpen2(false);
	}
	function closeModal3() {
		setIsOpen3(false);
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
							href="/about"
							className="cool-hover cursor-pointer"
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
						<Button
							onClick={openModal}
							className=" uppercase primary-color rounded-full "
						>
							Sign in
						</Button>

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
									<div className="fixed inset-0 bg-black/25" />
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
											<Dialog.Panel className="bg-black w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
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
									<div className="fixed inset-0 bg-black/25" />
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
											<Dialog.Panel className="bg-black w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
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
														openModal2();
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
									<div className="fixed inset-0 bg-black/25" />
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
											<Dialog.Panel className="bg-black w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
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
													}}
												/>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
						{/* <Dialog>
							<DialogTrigger asChild>
								<Button className="uppercase primary-color rounded-full">
									Sign in
								</Button>
							</DialogTrigger>
							<DialogContent className="text-white sm:max-w-[425px] rounded-2xl bg-black">
								<DialogHeader>
									<DialogTitle className="text-[32px] font-NunitoSans font-semibold">
										Create an account
									</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="flex flex-col gap-3">
										<Label
											htmlFor="phone"
											className=""
										>
											Phone number
										</Label>
										<Input
											id="phone"
											value="Pedro Duarte"
											className="col-span-3"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<Label
											htmlFor="password"
											className=""
										>
											Password
										</Label>
										<Input
											id="name"
											value="Pedro Duarte"
											className="col-span-3"
											type="password"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<Label
											htmlFor="confirm-password"
											className=""
										>
											Confirm password
										</Label>
										<Input
											id="name"
											value="Pedro Duarte"
											className="col-span-3"
											type="password"
										/>
									</div>
									<div>
										<p className="text-[#8D91BB] text-sm font-semibold font-NunitoSans">
											Already have an account?{" "}
											<span className="text-primary-bright">Sign In</span>
										</p>
									</div>
								</div>
								<DialogFooter>
									<Button
										type="submit"
										className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
									>
										Sign Up
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
