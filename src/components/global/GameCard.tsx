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
				return null;
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
		if (isOpen && !["RaidShooter", "Space hazards & Asteroid Redirection Program", "Drop Ball", "Candy Pop Slots", "Car Chase", "Rogue Rebels"].includes(gameName)) {
			const gameIdentifier = getGameIdentifier(gameName);
			if (!gameIdentifier) return;

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
					setGameData(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			// Override can_access for special games
			setGameData(prevState => ({
				...prevState,
				can_access: ["RaidShooter", "Space hazards & Asteroid Redirection Program", "Drop Ball", "Candy Pop Slots", "Car Chase", "Rogue Rebels"].includes(gameName),
			}));
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

	// Determine if the game should display a price
	const getPriceDisplay = (gameName: string) => {
		const freeGames = ["Drop Ball", "Space Hazard", "RaidShooter"];
		const lotteryGames = ["HyperWin Slots", "Roulette", "Baccarat", "Sweet Sugar", "Casino"];

		if (freeGames.includes(gameName)) {
			// Free games, no price
			return null;
		} else if (lotteryGames.includes(gameName)) {
			// Lottery games have a price of ₦100
			return "₦100";
		}
		// Default price for paid games if applicable (if further conditions arise)
		return null;
	};

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
								<Dialog.Panel className="bg-[#070B36] w-full max-w-[600px] transform overflow-hidden rounded-[20px] p-0 text-left shadow-xl transition-all">
									<Card className="w-full bg-[#070B36] border-0 rounded-[15px]">
										<CardContent className="flex flex-col justify-between p-4">
											{/* Image Section */}
											<div className="w-full h-[150px] mb-4">
												<Image
													src={img}
													width={300}
													height={150}
													className="object-cover w-full h-full rounded-md"
													alt={gameName}
												/>
											</div>

											{/* Game Information */}
											<div className="flex-1">
												<h1 className="text-white text-xl font-bold">
													{gameName}
												</h1>
												<p className="text-white text-sm mt-2 line-clamp-3">
													{content}
												</p>

												<div className="flex items-center mt-4 space-x-3">
													{/* Multiplayer Button */}
													<button className="bg-green-500 text-xs text-white py-1 px-3 rounded-full">
														{tag}
													</button>

													{/* Rating Section */}
													<div className="flex items-center">
														<span className="text-white text-sm">4.5</span>
														<svg
															className="w-4 h-4 text-yellow-400 ml-1"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.888a1 1 0 00-1.175 0l-3.974 2.888c-.784.57-1.839-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.536 9.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
														</svg>
													</div>
												</div>
											</div>
										</CardContent>

										{/* Price, Access, and Subscribe Button Section */}
										<div className="flex flex-col sm:flex-row justify-between items-center px-4 py-6 bg-gradient-to-r from-[#0C0E45] via-[#8A0189] to-[#0C0E45] rounded-b-[20px]">
											{/* Price, Access, and Balance Section */}
											<div className="flex flex-col items-center sm:items-start">
												<h1 className="text-white text-[24px] font-semibold">
													{getPriceDisplay(gameName) ?? "FREE"}
												</h1>

												{/* Game Access and Balance Info with Background */}
												<div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mt-2 sm:mt-0">
													<div className="bg-[#1C1F4A] text-white py-1 px-2 sm:py-1 sm:px-3 rounded-lg text-xs sm:text-sm">
														Access: {gameData.can_access ? "True" : "False"}
													</div>
													<div className="bg-[#1C1F4A] text-white py-1 px-2 sm:py-1 sm:px-3 rounded-lg text-xs sm:text-sm">
														Balance: {gameData.game_balance}
													</div>
												</div>
											</div>

											
											{/* Subscribe Button */}
											<Button
												onClick={() => {
													if (token && gameData.can_access) {
													window.location.href = `${gameLink}?${encryptString(token, stringKey)}`;
													} else if (token) {
													toast.error("Subscribe to have access.");
													} else {
													toast.error("Please login first to play");
													}
												}}
												className={`bg-[#E903E733] rounded-[100px] w-auto lg:w-[171px] h-[36px] px-6 text-white text-[10px] uppercase font-semibold font-Montserrat border border-[#F002EE] mt-4 sm:mt-0 ${
													!gameData.can_access ? 'cursor-not-allowed' : ''
												}`}
												>
												{!gameData.can_access ? "Subscribe To Play" : "Play"}
											</Button>
										</div>
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