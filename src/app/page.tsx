import Reveal from "@/components/Reveal";
import RevealHorizontal from "@/components/RevealHorizontal";
import GameCard from "@/components/global/GameCard";
import VideoPlayer from "@/components/global/VideoPlayer";
import HomePlayer from "@/components/home/HomePlayer";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
	const bacaratKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	const stringKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-[50px] md:pb-[106px]">
			<div className="col-span-3 mb-6">
				<RevealHorizontal>
					<HomePlayer />
				</RevealHorizontal>
			</div>
			<div className="col-span-3">
				<div className="flex flex-col gap-4">
					<div className="w-full  flex justify-between items-center md:items-start">
						<div className="flex flex-col gap-4 w-full lg:w-[529px]">
							<Reveal>
								<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
									Best Games
								</h1>
							</Reveal>
							<Reveal>
								<p className="hidden md:flex text-base text-[#8D91BB] font-normal leading-[20px]">
									{`Discover the thrill of victory with Play 2 Win's Best Games! Our treasure trove features both free and premium mobile and casino games. Whether you're chasing the adrenaline rush of a high score or the excitement of a jackpot, Play 2 Win is your ultimate gaming destination.`}
								</p>
							</Reveal>
						</div>
						<RevealHorizontal>
							<Button className="rounded-[100px] w-auto md:w-[142px] h-11 text-xs font-extrabold uppercase border bg-[#FFFFFF0D]">
								Show Details
							</Button>
						</RevealHorizontal>
					</div>

					<Reveal>
						<p className="text-base flex md:hidden text-[#8D91BB] font-normal leading-[20px]">
							{`Discover the thrill of victory with Play 2 Win's Best Games! Our treasure trove features both free and premium mobile and casino games. Whether you're chasing the adrenaline rush of a high score or the excitement of a jackpot, Play 2 Win is your ultimate gaming destination.`}
						</p>
					</Reveal>
				</div>
			</div>
			<div className="w-full flex-wrap flex flex-col md:flex-row items-center gap-4 md:gap-2 md:justify-between  xl:p-0 xl:justify-normal col-span-3 overflow-x-auto overflow-y-hidden scrollbar-hide">
				<div className="col-span-1 ">
					<RevealHorizontal>
						<GameCard
							gameName="RaidShooter"
							tag="Shooter | Top Down"
							gameLink={routes.raidShooter}
							img="/assets/RaidShooter.png"
							stringKey=""
							content={`Blast through enemy infested rooms, collect deadly weapons and upgrade your arsenal in Raid Shooter, the top down shooter where you unlock guns, characters, and pure action.`}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Space hazards & Asteroid Redirection Program"
							gameLink={routes.spaceHazard}
							content="Take control of a specialized spacecraft tasked with safeguarding a rocket from incoming waves of space debris."
							img="/assets/Sharp.jpg"
							tag="Hypercasual"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Drop Ball"
							gameLink={routes.dropBall}
							content="Test your anticipation skills as you predict the ball's  trajectory and craft platforms to safely guide it into the cup."
							img="/assets/DropBall.png"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="HyperWin Slots"
							gameLink={routes.hyperWinSlots}
							content="Spin the reels to win real cash in this hyperwin slots game."
							img="/assets/HyperwinSlot.png"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Sweet Sugar"
							gameLink={routes.sweetCandy}
							content="Swap and match colorful candies to complete levels and enjoy the addictive gameplay. With hundreds of levels and vibrant graphics, it's the perfect treat for puzzle lovers!
							Get ready for a sugary adventure!"
							img="/assets/SweetSugar.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Baccarat"
							gameLink={routes.baccarat}
							content="Play, win, and enjoy the elegance of classic Baccarat gameplay."
							img="/assets/Baccarat.png"
							tag="Singleplayer"
							stringKey={bacaratKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Rogue Rebels"
							gameLink={routes.rogueRebels}
							content="Team up with friends or go rogue solo in this action shooter game. Blast your enemies and win the game by being the last rebel standing."
							img="/assets/RogueRebels.png"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Roulette"
							gameLink={routes.roulette}
							content="Place your bets on red, black, or your favorite numbers and watch the wheel spin in Roulette. Experience the thrill of the casino as you aim for big wins in this classic game of chance and strategy."
							img="/assets/Roulette.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Car Chase"
							gameLink={routes.carChase}
							content="Speed through city streets and evade the cops in Car Chase. Dodge obstacles and outmaneuver your pursuers in this adrenaline-pumping racing game."
							img="/assets/CarChase.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Sugar Rush"
							gameLink={routes.sugarRush}
							content="Race through vibrant candy-themed worlds in Sugar Rush! Collect sweet rewards, avoid tricky obstacles, and outpace your competition in this colorful, fast-paced adventure. Can you become the ultimate sugar champion?"
							img="/assets/CarChase.jpg"
							tag="Singleplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Casino"
							gameLink={routes.casino}
							content="Speed through city streets and evade the cops in Car Chase. Dodge obstacles and outmaneuver your pursuers in this adrenaline-pumping racing game."
							img="/assets/CarChase.jpg"
							tag="Multiplayer"
							stringKey={stringKey}
						/>
					</RevealHorizontal>
				</div>
			</div>
		</main>
	);
}
