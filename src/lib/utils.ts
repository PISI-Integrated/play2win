import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function encryptString(stringToEncrypt: string, stringKey: string) {
	// Hash the key using SHA-256 to get a 256-bit key
	let hashedKey = CryptoJS.SHA256(stringKey).toString(CryptoJS.enc.Hex);
	let key = CryptoJS.enc.Hex.parse(hashedKey);
	let encrypted = CryptoJS.AES.encrypt(stringToEncrypt, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	return encrypted.toString();
}

// Example usage
// let stringToEncrypt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMzQ4MTYwNDc3MTAzIiwiZXhwIjoxNzE2OTc4MzEwfQ.ol2vvHH-VySYO9AyOYdrZGzOCHUxMekhIf2EbT0lVMs";
// let encryptedString = encryptString(stringToEncrypt, stringKey);
// console.log("Encrypted String: " + encryptedString);

// export function encryptString(stringToEncrypt: string) {
// 	const stringKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
// 	// Hash the key using SHA-256 to get a 256-bit key
// 	let hashedKey = CryptoJS.SHA256(stringKey).toString(CryptoJS.enc.Hex);
// 	let key = CryptoJS.enc.Hex.parse(hashedKey);

// 	// Encrypt the string
// 	let encrypted = CryptoJS.AES.encrypt(stringToEncrypt, key, {
// 		mode: CryptoJS.mode.ECB,
// 		padding: CryptoJS.pad.Pkcs7,
// 	});
// 	return encrypted.toString(); // Base64 encoded string
// }

// // Example usage
// let stringToEncrypt = "verybadmanisquitebad";
// let stringKey = "Play2Win-Win2Play-";
// let encryptedString = encryptString(stringToEncrypt, stringKey);
// console.log("Encrypted String: " + encryptedString);
