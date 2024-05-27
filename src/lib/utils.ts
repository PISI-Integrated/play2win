import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function xorEncrypt(text: string) {
	const key = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	let encrypted = "";
	for (let i = 0; i < text.length; i++) {
		encrypted += String.fromCharCode(
			text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
		);
	}
	return btoa(encrypted); // Convert to base64 to handle special characters
}
