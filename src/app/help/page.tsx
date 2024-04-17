import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<div className="pb-32">
				<div className="flex flex-col gap-4">
					<h1 className="text-white text-[32px] font-extrabold leading-[28px]">
						Help
					</h1>
					<p className="text-base  text-white font-normal leading-[20px]">
						{`Play 2 win is a web based mobile gaming telecom value-added service (VAS) product`}
					</p>
				</div>
				<div className="pt-4 flex flex-col gap-4">
					<h1 className="text-white text-[20px] font-extrabold leading-[28px]">
						Games available are
					</h1>
					<p className="text-base  text-white font-normal leading-[20px]">
						<span className="font-bold">Drop Ball:</span>
						{` Drop Ball is a hypercasual physics based puzzle game, Test your anticipation skills as you predict the ball's trajectory and craft platforms to safely guide it into the cup.`}
					</p>

					<p className="text-base  text-white font-normal leading-[20px]">
						<span className="font-bold">SHARP:</span>
						{` Space Hazards and Asteroids Redirection Program! Take control of a specialized spacecraft tasked with safeguarding a rocket from incoming waves of space debris. Use precision and strategy to deflect or redirect the hazardous objects, utilizing the unique capabilities of your craft designed specifically for this mission`}
					</p>
					<p className="text-base  text-white font-normal leading-[20px]">
						<span className="font-bold">Raid Shooter:</span>
						{` Blast through enemy infested rooms, collect deadly weapons and upgrade your arsenal in Raid Shooter, the top down shooter where you unlock guns, characters, and pure action`}
					</p>
				</div>
				<div className="w-auto max-w-[733px] h-auto border border-[#8D91BB] my-12">
					<div className="w-full h-[36px] flex items-center justify-start px-2 border border-b-[#8D91BB]">
						<div className="w-full h-[36px] flex items-center justify-start px-2 ">
							<h1 className="text-white">Keyword</h1>
						</div>
						<div className="w-full h-[36px] flex items-center justify-start px-2 border border-l-[#8D91BB]">
							<h1 className="text-white">Function</h1>
						</div>
						<div className="w-full h-[36px] flex items-center justify-start px-2 border border-l-[#8D91BB]">
							<h1 className="text-white">Cost</h1>
						</div>
						<div className="w-full h-[36px] flex items-center justify-start px-2 border border-l-[#8D91BB]">
							<h1 className="text-white">Validity</h1>
						</div>
					</div>
					<div className="w-full h-[75px] bg-[#21222F] flex items-center justify-start px-2 border border-b-[#8D91BB]">
						<div className="w-full h-[75px] flex items-center justify-start px-2 ">
							<h1 className="text-white">DPLAY</h1>
						</div>
						<div className="w-full h-[75px] flex items-center justify-start px-2 py-4 border border-l-[#8D91BB]">
							<h1 className="text-white">
								Subscribers gets Sports Betting & Lotto Tickets
							</h1>
						</div>
						<div className="w-full h-[75px] flex items-center justify-start px-2 border border-l-[#8D91BB]">
							<h1 className="text-white">
								One day free, then N 100 daily thereafter.
							</h1>
						</div>
						<div className="w-full h-[75px] flex items-center justify-start px-2 border border-l-[#8D91BB]">
							<h1 className="text-white">Daily</h1>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-xl font-extrabold leading-5">
						Contact Us
					</h2>
					<p className="text-white text-base leading-5">help@play2win.com.ng</p>
					<p className="text-white text-base leading-5">+2347057817249</p>
				</div>
			</div>
		</div>
	);
};

export default page;
