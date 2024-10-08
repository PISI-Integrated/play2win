export interface TSignUp {
	phone_number: string;
	password: string;
	confirm_password?: string;
}
export interface TSignIn {
	username: string;
	password: string;
}

export interface TVerifyOtp {
	phone_number: string;
	verification_code: string;
}
export type TResendCode = {
	phone_number: string;
};

export interface TReset {
	phone_number: string;
	token?: string
	password?: string;
}