import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";

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

export function encryptString(stringToEncrypt: string) {
	const stringKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
	// Hash the key using SHA-256 to get a 256-bit key
	let hashedKey = CryptoJS.SHA256(stringKey).toString(CryptoJS.enc.Hex);
	let key = CryptoJS.enc.Hex.parse(hashedKey);

	// Encrypt the string
	let encrypted = CryptoJS.AES.encrypt(stringToEncrypt, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	return encrypted.toString(); // Base64 encoded string
}

// // Example usage
// let stringToEncrypt = "verybadmanisquitebad";
// let stringKey = "Play2Win-Win2Play-";
// let encryptedString = encryptString(stringToEncrypt, stringKey);
// console.log("Encrypted String: " + encryptedString);
