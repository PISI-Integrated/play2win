import Reveal from "@/components/Reveal";
import RevealHorizontal from "@/components/RevealHorizontal";
import GameCard from "@/components/global/GameCard";
import VideoPlayer from "@/components/global/VideoPlayer";
import HomePlayer from "@/components/home/HomePlayer";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
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
						/>
					</RevealHorizontal>
				</div>
				<div className="col-span-1">
					<RevealHorizontal>
						<GameCard
							gameName="Baccarat"
							gameLink={routes.baccarat}
							content=""
							img="/assets/Baccarat.png"
							tag="Singleplayer"
						/>
					</RevealHorizontal>
				</div>
			</div>
		</main>
	);
}
