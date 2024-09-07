import { TResendCode, TSignIn, TSignUp, TVerifyOtp } from "@/types";
import axios from "axios";
import Cookies from "js-cookie";

let token = Cookies.get("token");

export const signUp = async (payload: TSignUp) => {
	try {
	  const { data } = await axios.post(
		`${process.env.NEXT_PUBLIC_URL}/auth/register`,
		payload
	  );
	  return data;
	} catch (error: any) {
	  if (axios.isAxiosError(error)) {
		const axiosError = error;
  
		// Log the entire response to get a complete picture
		console.error("Full error response:", axiosError.response);
  
		if (axiosError.response) {
		  // Log individual parts of the error response for debugging
		  console.log("Data part:", axiosError.response.data);
		  console.log("Status part:", axiosError.response.status);
		  console.log("Status text part:", axiosError.response.statusText);
  
		  // Try multiple paths for extracting the error message
		  const errorMessage = axiosError.response.data?.message || 
							   axiosError.response.data?.error?.message || 
							   axiosError.response.data?.error_description ||
							   axiosError.response.statusText || 
							   "Failed to sign up";
  
		  // Log the extracted error message for further inspection
		  console.log("Extracted error message:", errorMessage);
  
		  // Throw the extracted error message
		  throw new Error(errorMessage);
		}
	  }
	  // Handle other generic errors
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

export const requestPasswordReset = async (phoneNumber: string) => {
	try {
	  // Log the phone number and endpoint URL for debugging
	  console.log("Phone number in request:", phoneNumber);
	  console.log("Reset password endpoint:", `${process.env.NEXT_PUBLIC_URL}/auth/request-password-reset`);
  
	  const { data } = await axios.post(
		`${process.env.NEXT_PUBLIC_URL}/auth/request-password-reset`,
		{ phone_number: phoneNumber }
	  );
	  return data;
	} catch (error: any) {
	  if (axios.isAxiosError(error)) {
		// Log the full error response for debugging
		console.error("Axios Error Response:", error?.response?.data);
  
		if (error.response) {
		  const errorMessage = error.response.data?.message;
		  console.error("Backend error message:", errorMessage);
		  throw error.response.data;
		}
	  }
	  // Log other types of errors
	  console.error("Error message:", error.message);
	  throw error;
	}
  };

  export const resetPasswordConfirm = async (phone: string, token: string, newPassword: string) => {
	try {
	  // Log the request details for debugging
	  console.log("Reset password request details:", { phone, token, newPassword });
	  
	  const { data } = await axios.post(
		`${process.env.NEXT_PUBLIC_URL}/auth/reset-password`,
		{
		  phone_number: phone,
		  verification_code: token,
		  new_password: newPassword,
		}
	  );
  
	  // Log the response data
	  console.log("Response from reset password API:", data);
  
	  return data;
	} catch (error: any) {
	  if (axios.isAxiosError(error)) {
		// Log the full Axios error response for better debugging
		console.error("Axios Error Response:", error?.response?.data);
  
		if (error.response) {
		  const errorMessage = error.response.data?.message;
		  console.error("Backend error message:", errorMessage);
		  throw error.response.data;
		}
	  }
	  console.error("Error message:", error.message);
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



export async function getMe() {
try {
	const { data } = await axios.get(
	`${process.env.NEXT_PUBLIC_URL}/users/me`,
	{
		headers: {
		Authorization: `Bearer ${token}`,
		},
	}
	);

	// After successfully fetching the data, check if country exists
	if (data?.data?.country) {
	Cookies.set("country", data?.data?.country);
	}

	return data?.data;
} catch (error) {
	console.log(error);
	throw error;
}
}
