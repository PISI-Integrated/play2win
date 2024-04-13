import { TResendCode, TSignIn, TSignUp, TVerifyOtp } from "@/types";
import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (payload: TSignUp) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_URL}/auth/register`,
			payload
			// {
			// 	headers:{

			// 			post: {
			// 				"Access-Control-Allow-Origin": true
			// 			  }

			// 	}
			// }
		);
		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				// toast(errorMessage, {
				// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
				// 	action: {
				// 		label: "Undo",
				// 		onClick: () => console.log("Undo"),
				// 	},
				// });
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const signIn = async (formData: FormData) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_URL}/auth/login`,
			formData
		);
		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				// toast(errorMessage, {
				// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
				// 	action: {
				// 		label: "Undo",
				// 		onClick: () => console.log("Undo"),
				// 	},
				// });
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const verifyOtp = async (payload: TVerifyOtp) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_URL}/auth/verify-phone`,
			payload
		);
		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				// toast(errorMessage, {
				// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
				// 	action: {
				// 		label: "Undo",
				// 		onClick: () => console.log("Undo"),
				// 	},
				// });
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};

export const resendCode = async (payload: TResendCode) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_URL}/auth/resend-verification-code`,
			payload
		);
		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;
			if (axiosError.response) {
				// Accessing the error message from the response data
				const errorMessage = axiosError?.response?.data?.message;
				// toast(errorMessage, {
				// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
				// 	action: {
				// 		label: "Undo",
				// 		onClick: () => console.log("Undo"),
				// 	},
				// });
				return axiosError?.response?.data;
			}
		}
		// Handle other errors
		console.error("Error:", error.message);
		throw error;
	}
};
