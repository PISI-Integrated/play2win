import React, { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

type Props = {
	handlerFunc: () => void;
	action: () => void;
};

const VerifyOTP = ({ handlerFunc, action }: Props) => {
	const [value, setValue] = useState("");
	return (
		<div className="flex flex-col gap-4">
			<Label
				htmlFor="otp"
				className="text-white"
			>
				OTP
			</Label>
			<InputOTP
				maxLength={6}
				value={value}
				onChange={(value) => setValue(value)}
				pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
			>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
			</InputOTP>
			<div className="flex items-center justify-between">
				<h1 className="text-sm text-[#8D91BB] font-semibold cursor-pointer">
					0:59
				</h1>
				<p className="text-sm text-primary-bright font-semibold cursor-pointer">
					Resend code
				</p>
			</div>
			<div className="flex items-center justify-end">
				<Button
					type="submit"
					onClick={action}
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					Verify
				</Button>
			</div>
		</div>
	);
};

export default VerifyOTP;
