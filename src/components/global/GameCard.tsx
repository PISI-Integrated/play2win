import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const GameCard = (props: Props) => {
	return (
		<div className="card-gradient p-1 md:p-4 w-full  flex items-center lg:w-[429px] h-auto">
			<div className="flex items-start ">
				<div className=" ">
					<Image
						src="/assets/RaidShooter.png"
						width={110}
						height={186}
						alt="Game image"
					/>
				</div>
				<div className="flex-col gap-2 flex-1">
					<h1 className="text-white text-[20px] font-bold">Raid Shooter</h1>
					<p className="w-[182px] md:w-auto text-white text-sm text-ellipsis">
						{`Blast through enemy infested rooms, collect deadly weapons and upgrade your arsenal in Raid Shooter, the top down sho...`}
					</p>
					<Button className="bg-primary-green h-[19px] rounded-[20px] text-white text-[10px] uppercase font-semibold font-Montserrat">
						MultiPlayer
					</Button>
					<div className="w-full flex items-end justify-between pt-2">
						<div className="w-[63px] h-[27px] bg-[#FFFFFF1A] py-2 px-2 flex items-center gap-1 justify-center rounded-[20px] border ">
							<p className="text-white">4.5</p>
							<svg
								width="13"
								height="12"
								viewBox="0 0 13 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.02447 0.463526C6.17415 0.00287056 6.82585 0.00286996 6.97553 0.463525L8.0716 3.83688C8.13854 4.04289 8.33051 4.18237 8.54713 4.18237H12.0941C12.5784 4.18237 12.7798 4.80218 12.388 5.08688L9.51843 7.17173C9.34318 7.29905 9.26985 7.52474 9.33679 7.73075L10.4329 11.1041C10.5825 11.5648 10.0553 11.9478 9.66344 11.6631L6.79389 9.57827C6.61865 9.45095 6.38135 9.45095 6.20611 9.57827L3.33656 11.6631C2.9447 11.9478 2.41746 11.5648 2.56714 11.1041L3.66321 7.73075C3.73015 7.52474 3.65682 7.29905 3.48157 7.17173L0.612025 5.08688C0.220169 4.80218 0.421556 4.18237 0.905918 4.18237H4.45287C4.66949 4.18237 4.86146 4.04289 4.9284 3.83688L6.02447 0.463526Z"
									fill="url(#paint0_linear_26_978)"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_26_978"
										x1="6.5"
										y1="-1"
										x2="6.5"
										y2="14"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											offset="0.436991"
											stop-color="#F59E3F"
										/>
										<stop
											offset="0.621079"
											stop-color="#E17601"
										/>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<Button className="bg-[#E903E733] rounded-[100px] w-[111px] h-[36px] text-white text-[10px] uppercase font-semibold font-Montserrat border border-[#F002EE]">
							Play
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
