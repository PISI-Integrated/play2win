import React, { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services";
import toast from "react-hot-toast";
import { TSignUp } from "@/types";
import Cookies from "js-cookie";
import { EyeNoneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";

type Props = {
	handlerFunc: () => void;
	action: () => void;
};

const SignUpContent = ({ handlerFunc, action }: Props) => {
	const [signUpDetails, setSignUpDetails] = useState<TSignUp>({
		phone_number: "+234",
		password: "",
		confirm_password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignUpDetails({
			...signUpDetails,
			[name]: value,
		});
	};

	const { mutate: signUpMutation, isPending } = useMutation({
		mutationFn: signUp,
		onSuccess: ({ success, message }) => {
			if (success === true) {
				action();
				toast.success(message);
			} else {
				toast.error(message);
			}
			// Invalidate and refetch
			//   queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
		onError: ({ message }) => {
			toast.error(message);
		},
	});

	function handleSignUp() {
		Cookies.set("phone_number", signUpDetails?.phone_number);
		// Validate password and confirm password
		if (signUpDetails.password !== signUpDetails.confirm_password) {
			toast.error("Passwords do not match");
			return;
		} else {
			const payload = {
				password: signUpDetails.password,
				phone_number: signUpDetails.phone_number,
			};
			signUpMutation({ ...payload });
		}
	}

	const [hidePassword, setHidePassword] = useState<boolean>(true);
	const togglePasswordVisibility = () => {
		setHidePassword(!hidePassword);
	};
	return (
		<div>
			<div className="grid gap-4 py-4">
				<div className="flex flex-col gap-3">
					<Label
						htmlFor="phone"
						className="text-white"
					>
						Phone number
					</Label>
					<Input
						name="phone_number"
						placeholder="+234"
						value={signUpDetails.phone_number}
						className="col-span-3"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-3">
					<Label
						htmlFor="password"
						className="text-white"
					>
						Password
					</Label>
					<div className="relative">
						<Input
							name="password"
							value={signUpDetails.password}
							className="col-span-3"
							type={hidePassword ? "password" : "text"}
							onChange={handleChange} // Add onChange for password
						/>
						{hidePassword ? (
							<EyeNoneIcon
								onClick={togglePasswordVisibility}
								className="w-5 h-5 absolute top-2 right-4 text-white"
							/>
						) : (
							<EyeIcon
								onClick={togglePasswordVisibility}
								className="w-5 h-5 absolute top-2 right-4 text-white"
							/>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Label
						htmlFor="confirm-password"
						className="text-white"
					>
						Confirm password
					</Label>
					<div className="relative">
						<Input
							name="confirm_password"
							value={signUpDetails.confirm_password}
							className="col-span-3"
							type={hidePassword ? "password" : "text"}
							onChange={handleChange} // Add onChange for confirm password
						/>
						{hidePassword ? (
							<EyeNoneIcon
								onClick={togglePasswordVisibility}
								className="w-5 h-5 absolute top-2 right-4 text-white"
							/>
						) : (
							<EyeIcon
								onClick={togglePasswordVisibility}
								className="w-5 h-5 absolute top-2 right-4 text-white"
							/>
						)}
					</div>
				</div>
				<div>
					<p className="text-[#8D91BB] text-sm font-semibold font-NunitoSans">
						Already have an account?{" "}
						<span
							onClick={() => handlerFunc()}
							className="text-primary-bright cursor-pointer"
						>
							Sign In
						</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-end">
				<Button
					type="submit"
					onClick={handleSignUp}
					disabled={isPending}
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					{isPending ? (
						<ReloadIcon className="w-4 h-4 animate-spin mr-4" />
					) : null}
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default SignUpContent;
