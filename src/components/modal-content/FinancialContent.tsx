import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

type Props = {};

const FinancialContent = (props: Props) => {
	return (
		<div>
			{/* <Tabs
				defaultValue="account"
				className="w-[400px]"
			>
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
			</Tabs> */}
			<div className="flex flex-col gap-8">
				<h1 className="text-[32px] text-white font-NunitoSans font-semibold ">
					Withdrawal
				</h1>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<Label
							htmlFor="amount"
							className="text-white font-NunitoSans "
						>
							Amount
						</Label>
						<Input
							id="amount"
							value="1000"
							placeholder="₦"
							className="col-span-3 "
							type="number"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label
							htmlFor="account-number"
							className="text-white font-NunitoSans "
						>
							Account number
						</Label>
						<Input
							id="account-number"
							value="1000"
							placeholder="₦"
							className="col-span-3 "
							type="number"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label
							htmlFor="bank"
							className="text-white font-NunitoSans "
						>
							Bank
						</Label>
						<select
							name="banks"
							id="banks"
							className="flex h-10 w-full rounded-[100px] border bg-primary text-white px-3 py-2 text-sm"
						>
							<option value="zenith">Zenith Bank</option>
							<option value="gt-bank">GT Bank</option>
						</select>
					</div>
					<div className="flex flex-col gap-3">
						<Label
							htmlFor="account-name"
							className="text-white font-NunitoSans "
						>
							Account Name
						</Label>
						<Input
							id="account-name"
							value="Joseph Keswet"
							placeholder=""
							className="col-span-3 "
							type="text"
						/>
					</div>
				</div>
				<div className="flex justify-end">
					<Button className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]">
						Continue
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FinancialContent;
