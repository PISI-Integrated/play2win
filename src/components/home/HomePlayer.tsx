"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import videojs from "video.js";
import VideoJS from "../global/VideoJS";
import { Button } from "../ui/button";

type Props = {};

const HomePlayer = (props: Props) => {
	const playerRef = React.useRef(null);

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: "/assets/Video.MP4",
				type: "video/mp4",
			},
		],
	};

	const handlePlayerReady = (player: any) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		player.on("dispose", () => {
			videojs.log("player will dispose");
		});
	};
	return (
		<div>
			<Card className="h-auto lg:h-[455px]  video-gradient card-gradient hover:border-[#f002ee] ">
				<CardContent className="flex flex-col lg:flex-row items-start h-auto lg:h-[450px]">
					<video
						src="/assets/Video.MP4"
						width="800"
						height="400"
						className="w-full h-full rounded-[25px]"
						controls
					/>
					<div className="p-4 lg:pt-6">
						<div className="flex flex-col gap-4">
							<h1 className="text-white text-[32px] font-extrabold">
								Drop Ball
							</h1>
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
							<Button className="bg-primary-bright hover:bg-primary-bright/35 transition-all w-[100px] h-[19px] rounded-[20px] text-white text-[10px] uppercase font-semibold font-Montserrat ">
								Single player
							</Button>
							<p className="text-white text-sm font-light w-full lg:w-[494px]">
								{`Test your anticipation skills as you predict the ball's trajectory
						and craft platforms to safely guide it into the cup`}
							</p>
						</div>
						<div className="mt-auto">
							<Button className="bg-[#E903E733] rounded-[100px] mt-[63px] decoration-transparent w-full md:w-[146px] h-11 text-white text-[12px] uppercase font-extrabold font-Montserrat border border-[#F002EE]">
								Play the game
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default HomePlayer;
