"use client";
import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
} from "../ui/card";
import { Dialog, Transition } from "@headlessui/react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { encryptString } from "@/lib/utils";

type Props = {
	content: string;
	img: string;
	gameName: string;
	tag: string;
	gameLink: string;
	stringKey: string;
};

const GameCard = ({
	img,
	content,
	gameName,
	tag,
	gameLink,
	stringKey,
}: Props) => {
	const token = Cookies.get("token");

	let [isOpen, setIsOpen] = useState(false);
	let [gameData, setGameData] = useState({
		can_access: false,
		game_balance: 0,
		message: "",
	});

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// Function to map gameName to its identifier
	const getGameIdentifier = (gameName: string) => {
		switch (gameName) {
			case "RaidShooter":
				return "raid_shooter";
			case "Space hazards & Asteroid Redirection Program":
				return "space_hazard";
			case "Drop Ball":
				return "drop_ball";
			case "HyperWin Slots":
				return "hyperwin_slots";
			case "Candy Pop Slots":
			case "Rogue Rebels":
			case "Car Chase":
				return null; // Return null for these games as per your instruction
			case "Baccarat Slots":
				return "baccarat";
			case "Roulette":
				return "roulette";
			case "Sweet Sugar":
				return "sweet_sugar";
			case "Casino":
			default:
				return "casino";
		}
	};

	// Fetch game data when modal opens
	useEffect(() => {
		if (isOpen) {
			// Get the correct game identifier
			const gameIdentifier = getGameIdentifier(gameName);
			
			// Skip the API call if the game identifier is null
			if (!gameIdentifier) {
				return;
			}

			const config = {
				method: "get",
				maxBodyLength: Infinity,
				url: `https://api.play2win.com.ng/api/v1/games/${gameIdentifier}`,
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			};

			axios
				.request(config)
				.then((response) => {
					// Set the game data from the server response
					setGameData(response.data);
					console.log(response.data); // Log the response for debugging
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [isOpen, token, gameName]);

	function truncateContent(content: any, maxWords: any) {
		const words = content?.split(" ");
		if (words?.length > maxWords) {
			return words?.slice(0, maxWords).join(" ") + "...";
		} else {
			return content;
		}
	}

	return (
		<main>
			<Card className="card-gradient hover:border-[#f002ee] w-[340px] md:w-[429px] h-[218px]">
				<CardContent className="w-full h-full flex justify-between items-center pr-0  pl-2 md:pr-4">
					<div className="w-full md:w-[110px] h-[186px] md:mr-4">
						<Image
							src={img}
							width={110}
							height={186}
							className="object-contain  md:object-cover w-full h-full "
							alt="Game Image"
						/>
					</div>
					<div className="flex flex-col gap-2 h-[186px] pr-4 flex-1">
						<h1 className="text-white text-base md:text-[20px] font-bold">
							{gameName}
						</h1>
						<div className="w-[200px] ">
							<p className="text-white text-sm">
								{truncateContent(content, 10)}
							</p>
						</div>

						<Button className="bg-primary-green hover:bg-primary-green w-auto max-w-[150px] h-[19px] rounded-[20px] text-white text-[10px] uppercase font-semibold font-Montserrat">
							{tag}
						</Button>
						<div className=" flex items-end justify-between pt-2">
							<Button
								onClick={openModal}
								className="bg-[#E903E733] rounded-[100px] w-[111px] h-[36px] text-white text-[10px] uppercase font-semibold font-Montserrat border border-[#F002EE]"
							>
								Play
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
								<Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-[600px] transform overflow-hidden rounded-[20px] p-0 text-left align-middle shadow-xl transition-all">
									<Card className="w-full bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] border-0 md:pl-4">
										<CardContent>
											<div className="w-full h-full flex justify-between items-center rounded-b-[20px] py-4 bg-[#070B36]">
												<div className="w-auto mr-2 h-[186px] md:mr-4">
													<Image
														src={img}
														width={110}
														height={186}
														className="object-contain  md:object-cover w-full h-full "
														alt="Game Image"
													/>
												</div>
												<div className="flex flex-col gap-2 h-[186px] pr-4 flex-1">
													<h1 className="text-white text-base md:text-[20px] font-bold">
														{gameName}
													</h1>
													<p className="w-auto text-white text-sm text-ellipsis">
														{content}
													</p>

													<div className="flex items-center justify-end gap-2 pt-2">
														<Button className="bg-primary-green hover:bg-primary-green w-auto max-w-[150px] h-[19px] rounded-[20px] text-white text-[10px] uppercase font-semibold font-Montserrat">
															{tag}
														</Button>
													</div>
												</div>
											</div>

											<div className="flex justify-between items-center px-4 py-6 text-white">
												<h1 className="text-white text-[32px]">
													{["Baccarat", "Sweet Sugar", "Roulette", "Casino", "HyperWin Slots"].includes(gameName)
														? "₦100"
														: "Free"}
												</h1>

												<div className="flex flex-col gap-2">
													<p>
														Game Access:{" "}
														{gameData.can_access
															? "True"
															: "False"}
													</p>
													<p>
														Game balance:{" "}
														{gameData.game_balance}
													</p>
												</div>

												<Button
													onClick={() => {
														if (token) {
															window.location.href = `${gameLink}?${encryptString(
																token,
																stringKey
															)}`;
														} else {
															toast.error(
																"Please login first to play"
															);
														}
													}}
													className="bg-[#E903E733] rounded-[100px] w-auto lg:w-[171px] h-[36px] px-6 text-white text-[10px] uppercase font-semibold font-Montserrat border border-[#F002EE]"
												>
													{["Baccarat", "Sugar Rush", "Roulette", "Casino", "HyperWin Slots"].includes(gameName)
														? "Subscribe To Play"
														: "Play"}
												</Button>
											</div>
										</CardContent>
									</Card>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</main>
	);
};

export default GameCard;
