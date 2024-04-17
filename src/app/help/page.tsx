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
			</div>
		</div>
	);
};

export default page;
