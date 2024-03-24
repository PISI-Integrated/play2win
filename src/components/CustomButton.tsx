"use client";
import React from "react";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

type Props = {
	iconPos?: string;
	icon?: string | any;
	isLoading: boolean;
	text: string;
	color?: string;
	borderRadius?: string;
	borderColor?: string;
	bgColor?: string;
	handlerFunction: () => void;
};

export default function CustomButton({
	iconPos,
	icon,
	isLoading,
	text,
	handlerFunction,
	bgColor,
	borderColor,
	borderRadius,
	color,
}: Props) {
	const renderIcon = () => {
		if (typeof icon === "string") {
			return (
				<Image
					src={icon}
					width={20}
					height={20}
					className="ml-3"
					alt="Button icon"
				/>
			);
		} else {
			return <div className="mr-2">{icon}</div>;
		}
	};

	return (
		<div>
			<Button
				className={`w-full h-11 text-sm text-white font-medium ${
					bgColor ? bgColor : "bg-primary-bright"
				} ${borderColor ? borderColor : ""} ${
					borderRadius ? borderRadius : ""
				} ${color ? color : ""} ${
					bgColor ? `hover:${bgColor}` : "hover:bg-primary-bright/35"
				} ${borderRadius ? borderRadius : ""}`}
				onClick={handlerFunction}
				disabled={isLoading}
			>
				{iconPos === "left" && !isLoading && icon && renderIcon()}
				{text}
				{isLoading && <ReloadIcon className="animate-spin ml-3" />}
				{iconPos !== "left" && !isLoading && icon && renderIcon()}
			</Button>
		</div>
	);
}
