import Reveal from "@/components/Reveal";
import RevealRight from "@/components/RevealHorizontal";
import GameCard from "@/components/global/GameCard";
import VideoPlayer from "@/components/global/VideoPlayer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MotionConfig } from "framer-motion";
import React from "react";
import RevealHorizontal from "@/components/RevealHorizontal";

type Props = {};

const page = (props: Props) => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-[50px] md:pb-[106px]">
			<div className="col-span-1 md:col-span-3">
				<div className="flex flex-col gap-4">
					<Reveal>
						<div className="w-full  flex justify-between items-center md:items-start">
							<div className="flex flex-col gap-4 w-full lg:w-[529px]">
								<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
									About Games
								</h1>
								<p className="hidden md:flex text-base text-[#8D91BB] font-normal leading-[20px]">
									{`Are you just getting into gaming or simply looking for inspiration perhaps you’ve mastered.`}
								</p>
							</div>
							<Button className="rounded-[100px] w-auto md:w-[142px] h-11 text-xs font-extrabold uppercase border bg-[#FFFFFF0D]">
								Show Details
							</Button>
						</div>
					</Reveal>
					<Reveal>
						<p className="text-base flex md:hidden text-[#8D91BB] font-normal leading-[20px]">
							{`Are you just getting into gaming or simply looking for inspiration
						perhaps you’ve mastered. Explore the best of the best here`}
						</p>
					</Reveal>
				</div>
			</div>
			<div className="col-span-1">
				<div className="max-h-[686px] overflow-y-auto scrollbar-hide">
					<RevealHorizontal>
						<div className="">
							<GameCard />
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard />
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard />
						</div>
					</RevealHorizontal>
					<RevealHorizontal>
						<div className="mt-4">
							<GameCard />
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
