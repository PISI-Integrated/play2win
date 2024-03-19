import GameCard from "@/components/global/GameCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			<div className="col-span-3">
				<div className="flex flex-col gap-4">
					<div className="w-full  flex justify-between items-center md:items-start">
						<div className="flex flex-col gap-4 w-full lg:w-[529px]">
							<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
								Best Games
							</h1>
							<p className="hidden md:flex text-base text-[#8D91BB] font-normal leading-[20px]">
								{`Are you just getting into gaming or simply looking for inspiration
						perhaps you’ve mastered. Explore the best of the best here`}
							</p>
						</div>
						<Button className="rounded-[100px] w-auto md:w-[142px] h-11 text-xs font-extrabold uppercase border bg-[#FFFFFF0D]">
							Show Details
						</Button>
					</div>
					<p className="text-base flex md:hidden text-[#8D91BB] font-normal leading-[20px]">
						{`Are you just getting into gaming or simply looking for inspiration
						perhaps you’ve mastered. Explore the best of the best here`}
					</p>
				</div>
			</div>
			<div className="flex items-center gap-4 px-4 xl:p-0 xl:justify-between col-span-3 overflow-x-auto">
				<div className="col-span-1">
					<GameCard />
				</div>
				<div className="col-span-1">
					<GameCard />
				</div>
				<div className="col-span-1">
					<GameCard />
				</div>
			</div>
			<div>03</div>
			<div>09</div>
		</main>
	);
}
