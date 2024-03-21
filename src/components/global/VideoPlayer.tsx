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
import VideoJS from "./VideoJS";
import { Button } from "../ui/button";

type Props = {};

const VideoPlayer = (props: Props) => {
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
			<Card className="h-[686px] video-gradient card-gradient hover:border-[#f002ee] ">
				<CardHeader className="bg-[#070B36] p-0 w-full h-[450px] rounded-t-[20px]">
					{" "}
					{/* <div className="w-full h-full rounded-t-[20px]">
						<VideoJS
							options={videoJsOptions}
							onReady={handlePlayerReady}
						/>
					</div> */}
					<video
						src="/assets/Video.MP4"
						width="800"
						height="400"
						className="w-full h-full"
						controls
					/>
				</CardHeader>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<h1 className="text-white text-2xl font-extrabold">Drop Ball</h1>
						<Button className="bg-[#E903E733] rounded-[100px] decoration-transparent w-full md:w-[146px] h-11 text-white text-[12px] uppercase font-extrabold font-Montserrat border border-[#F002EE]">
							Play the game
						</Button>
					</div>
					<p className="text-white text-sm font-light w-full lg:w-[494px]">
						{`Test your anticipation skills as you predict the ball's trajectory
						and craft platforms to safely guide it into the cup`}
					</p>
					<Button className="bg-primary-bright hover:bg-primary-bright/35 transition-all w-[100px] h-[19px] mt-[63px] rounded-[20px] text-white text-[10px] uppercase font-semibold font-Montserrat ">
						Single player
					</Button>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default VideoPlayer;
