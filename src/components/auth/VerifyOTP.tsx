import React, { ChangeEvent, useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useMutation } from "@tanstack/react-query";
import { resendCode, verifyOtp } from "@/services";
import toast from "react-hot-toast";
import { TResendCode, TVerifyOtp } from "@/types";
import Cookies from "js-cookie";
import { ReloadIcon } from "@radix-ui/react-icons";

type Props = {
	handlerFunc: () => void;
	action: () => void;
};

const VerifyOTP = ({ handlerFunc, action }: Props) => {
	const [value, setValue] = useState("");
	const phone_number = Cookies.get("phone_number");
	const [resendDisabled, setResendDisabled] = useState(false);
	const [counter, setCounter] = useState(59); // Initial counter value

	const { mutate: resendCodeMutation, isPending: isResending } = useMutation({
		mutationFn: resendCode,
		onSuccess: ({ success, message }) => {
			if (success === true) {
				startCounter();
				toast.success(message, {
					style: {
						zIndex: 9999
					}
				});
			} else {
				toast.error(message, {
					style: {
						zIndex: 9999
					}
				});
			}
			// Invalidate and refetch
			//   queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
		onError: ({ message }) => {
			toast.error(message, {
				style: {
					zIndex: 9999
				}
			});
		},
	});

	const { mutate: verifyOtpMutation, isPending } = useMutation({
		mutationFn: verifyOtp,
		onSuccess: ({ success, message }) => {
			if (success === true) {
				action();
				toast.success(message, {
					style: {
						zIndex: 9999
					}
				});
			} else {
				toast.error(message, {
					style: {
						zIndex: 9999
					}
				});
			}
			// Invalidate and refetch
			//   queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
		onError: ({ message }) => {
			toast.error(message, {
				style: {
					zIndex: 9999
				}
			});
		},
	});

	function handleVerify() {
		const payload: TVerifyOtp = {
			phone_number: phone_number as string,
			verification_code: value,
		};

		verifyOtpMutation({ ...payload });
	}

	function handleResendCode() {
		const payload: TResendCode = {
			phone_number: phone_number as string,
			// phone_number: "08160477103",
		};

		resendCodeMutation({ ...payload });
	}

	function startCounter() {
		setCounter(59); // Reset counter to 59 seconds
		setResendDisabled(true); // Disable the resend button
	}

	useEffect(() => {
		// Function to decrement counter every second
		const interval = setInterval(() => {
			setCounter((prevCounter) => {
				if (prevCounter === 0) {
					clearInterval(interval); // Stop the interval when counter reaches 0
					setResendDisabled(false); // Enable the resend button
					return 59; // Reset counter to 59 seconds
				} else {
					return prevCounter - 1;
				}
			});
		}, 1000);

		// Cleanup function to clear interval on component unmount
		return () => clearInterval(interval);
	}, []);

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
					0:{counter < 10 ? `0${counter}` : counter}
				</h1>
				<Button
					variant="ghost"
					className="bg-transparent hover:bg-transparent"
					disabled={resendDisabled}
				>
					<p
						onClick={handleResendCode}
						className="text-sm text-primary-bright font-semibold cursor-pointer"
					>
						Resend code
					</p>
				</Button>
			</div>
			<div className="flex items-center justify-end">
				<Button
					type="submit"
					onClick={handleVerify}
					disabled={isPending}
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					{isPending ? (
						<ReloadIcon className="w-4 h-4 animate-spin mr-4" />
					) : null}
					Verify
				</Button>
			</div>
		</div>
	);
};

export default VerifyOTP;
