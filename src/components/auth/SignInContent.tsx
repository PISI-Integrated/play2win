"use client";
import React, { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TSignIn } from "@/types";
import { signIn } from "@/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { EyeNoneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
	handlerFunc: () => void;
	action: () => void;
};

const SignInContent = ({ handlerFunc, action }: Props) => {
	const router = useRouter();
	const [signInDetails, setSignInDetails] = useState<TSignIn>({
		username: "+234",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignInDetails({
			...signInDetails,
			[name]: value,
		});
	};

	const [hidePassword, setHidePassword] = useState<boolean>(true);
	const togglePasswordVisibility = () => {
		setHidePassword(!hidePassword);
	};

	const { mutate: signInMutation, isPending } = useMutation({
		mutationFn: signIn,
		onSuccess: ({ success, message, detail, access_token }) => {
			if (access_token) {
				action();
				toast.success("You have successfully signed in");
				Cookies.set("token", access_token);
				window.location.reload();
			} else {
				toast.error(detail);
			}
			// Invalidate and refetch
			//   queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
		onError: ({ message }) => {
			toast.error(message);
		},
	});

	function handleSignIn() {
		const formData = new FormData();
		formData.append("username", signInDetails.username);
		formData.append("password", signInDetails.password);

		signInMutation(formData);
	}

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
						name="username"
						value={signInDetails.username}
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
							value={signInDetails?.password}
							onChange={handleChange}
							className="col-span-3"
							type={hidePassword ? "password" : "text"}
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
						{`I don't have an account?`}
						<span
							onClick={() => handlerFunc()}
							className="text-primary-bright pl-1 cursor-pointer"
						>
							Sign Up
						</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-end">
				<Button
					type="submit"
					onClick={handleSignIn}
					disabled={isPending}
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					{isPending ? (
						<ReloadIcon className="w-4 h-4 animate-spin mr-4" />
					) : null}
					Sign In
				</Button>
			</div>
		</div>
	);
};

export default SignInContent;
