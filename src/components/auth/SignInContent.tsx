import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
	handlerFunc: () => void;
};

const SignInContent = ({ handlerFunc }: Props) => {
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
						id="phone"
						value="Pedro Duarte"
						className="col-span-3"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<Label
						htmlFor="password"
						className="text-white"
					>
						Password
					</Label>
					<Input
						id="name"
						value="Pedro Duarte"
						className="col-span-3"
						type="password"
					/>
				</div>

				<div>
					<p className="text-[#8D91BB] text-sm font-semibold font-NunitoSans">
						I don't have an account?
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
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					Sign In
				</Button>
			</div>
		</div>
	);
};

export default SignInContent;
