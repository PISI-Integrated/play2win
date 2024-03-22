import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
	handlerFunc: () => void;
	action: () => void;
};

const SignUpContent = ({ handlerFunc, action }: Props) => {
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
				<div className="flex flex-col gap-3">
					<Label
						htmlFor="confirm-password"
						className="text-white"
					>
						Confirm password
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
					onClick={action}
					className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
				>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default SignUpContent;
