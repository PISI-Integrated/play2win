import Reveal from "@/components/Reveal";
import RevealRight from "@/components/RevealHorizontal";
import GameCard from "@/components/global/GameCard";
import VideoPlayer from "@/components/global/VideoPlayer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MotionConfig } from "framer-motion";
import React from "react";
import RevealHorizontal from "@/components/RevealHorizontal";
import { routes } from "@/lib/constants";

type Props = {};

const page = (props: Props) => {
	const bacaratKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	const stringKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-[50px] md:pb-[106px]">
			<div className="col-span-1 md:col-span-3">
				<div className="flex flex-col gap-4">
					<Reveal>
						<div className="w-full  flex justify-between items-center md:items-start">
							<div className="flex flex-col gap-4 w-full lg:w-[529px]">
								<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
									About Us
								</h1>
								<p className="hidden md:flex text-base text-[#8D91BB] font-normal leading-[20px]">
									{`Powered by Play2Win Ltd and part of PISI Integrated Services Ltd, trading as Spin Lotto, Play 2 Win offers an unrivalled gaming universe. We promise safe gaming as an NCC and NLRC-licensed organisation. Explore our vast selection of thrilling free and premium mobile games and casino bets. At Play 2 Win, every click brings you closer to your next big win. Start your adventure today!`}
								</p>
							</div>
							<Button className="rounded-[100px] w-auto md:w-[142px] h-11 text-xs font-extrabold uppercase border bg-[#FFFFFF0D]">
								Show Details
							</Button>
						</div>
					</Reveal>
					<Reveal>
						<p className="text-base flex md:hidden text-[#8D91BB] font-normal leading-[20px]">
							{`Powered by Play2Win Ltd and part of PISI Integrated Services Ltd, trading as Spin Lotto, Play 2 Win offers an unrivalled gaming universe. We promise safe gaming as an NCC and NLRC-licensed organisation. Explore our vast selection of thrilling free and premium mobile games and casino bets. At Play 2 Win, every click brings you closer to your next big win. Start your adventure today!`}
						</p>
					</Reveal>
				</div>
			</div>
			<div className="col-span-1">
				<div className=" scrollbar-hide">
					<RevealHorizontal>
						<div className="">
							<GameCard
								tag="Shooter | Top down"
								gameName="RaidShooter"
								gameLink={routes.raidShooter}
								img="/assets/RaidShooter.png"
								stringKey={stringKey}
								content={`Blast through enemy infested rooms, collect deadly weapons and upgrade your arsenal in Raid Shooter, the top down shooter where you unlock guns, characters, and pure action.`}
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard
								tag="Hypercasual"
								gameName="Space hazards & Asteroid Redirection Program"
								gameLink={routes.spaceHazard}
								stringKey={stringKey}
								content="Take control of a specialized spacecraft tasked with safeguarding a rocket from incoming waves of space debris."
								img="/assets/Sharp.jpg"
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard
								gameName="Drop Ball"
								gameLink={routes.dropBall}
								stringKey={stringKey}
								content="Test your anticipation skills as you predict the ball's  trajectory and craft platforms to safely guide it into the cup."
								img="/assets/DropBall.png"
								tag="Singleplayer"
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard
								gameName="Sweet Sugar"
								gameLink={routes.sweetCandy}
								stringKey={stringKey}
								content="Swap and match colorful candies to complete levels and enjoy the addictive gameplay. With hundreds of levels and vibrant graphics, it's the perfect treat for puzzle lovers!
							Get ready for a sugary adventure!"
								img="/assets/SweetSugar.jpg"
								tag="Singleplayer"
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard
								gameName="Baccarat"
								gameLink={routes.baccarat}
								stringKey={bacaratKey}
								content="Baccarat offers a seamless and stylish way to play the classic card game, putting the thrill of the casino right at your fingertips."
								img="/assets/Baccarat.png"
								tag="Singleplayer"
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard
								gameName="HyperWin Slots"
								gameLink={routes.hyperWinSlots}
								content="Spin the reels to win real cash in this hyperwin slots game."
								img="/assets/HyperwinSlot.png"
								tag="Singleplayer"
								stringKey={stringKey}
							/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
						<GameCard
							gameName="Rogue Rebels"
							gameLink={routes.rogueRebels}
							content="Team up with friends or go rogue solo in this action shooter game. Blast your enemies and win the game by being the last rebel standing."
							img="/assets/RogueRebels.png"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
						<GameCard
							gameName="Roulette"
							gameLink={routes.roulette}
							content="Place your bets on red, black, or your favorite numbers and watch the wheel spin in Roulette. Experience the thrill of the casino as you aim for big wins in this classic game of chance and strategy."
							img="/assets/Roulette.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
						<GameCard
							gameName="Car Chase"
							gameLink={routes.carChase}
							content="Speed through city streets and evade the cops in Car Chase. Dodge obstacles and outmaneuver your pursuers in this adrenaline-pumping racing game."
							img="/assets/CarChase.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
						</div>
					</RevealHorizontal>
				</div>
			</div>
			<div className="col-span-1 md:col-span-2">
				<Reveal>
					<VideoPlayer />
				</Reveal>
			</div>
		</main>
	);
};

export default page;
