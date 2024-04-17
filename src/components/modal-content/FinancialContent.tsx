"use client";
import React, { ChangeEvent, useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { PaystackButton } from "react-paystack";

type Props = {};

const FinancialContent = (props: Props) => {
	const [amount, setAmount] = useState<number>(0);
	const config = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
	};
	const handlePaystackSuccessAction = (reference: any) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);
	};

	// you can call this function anything
	const handlePaystackCloseAction = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	const componentProps = {
		...config,
		text: "Continue",
		onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
		onClose: handlePaystackCloseAction,
	};
	return (
		<div>
			<Tabs
				defaultValue="account"
				className="w-[400px]"
			>
				<TabsList>
					<TabsTrigger
						className="rounded-l-[20px]  "
						value="fund"
					>
						Add money
					</TabsTrigger>
					<TabsTrigger
						className="rounded-r-[20px]"
						value="withdraw"
					>
						Withdrawal
					</TabsTrigger>
				</TabsList>
				<TabsContent value="fund">
					<div className="flex flex-col gap-8">
						<h1 className="text-[32px] text-white font-NunitoSans font-semibold ">
							Add money
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
									value={amount}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setAmount(parseFloat(e.target.value))
									}
									placeholder="₦"
									className="col-span-3 "
									type="number"
								/>
							</div>
							<div className="flex flex-col gap-4 text-white">
								<RadioGroup defaultValue="paystack">
									<div className="flex items-center space-x-2">
										<RadioGroupItem
											value="paystack"
											id="r1"
										/>
										<Label htmlFor="r1">Paystack</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem
											value="airtime"
											id="r2"
										/>
										<Label htmlFor="r2">Airtime</Label>
									</div>
								</RadioGroup>
							</div>
							<div className="flex justify-end">
								<Button className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]">
									<PaystackButton {...componentProps} />
								</Button>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="withdraw">
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
									value={amount}
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
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default FinancialContent;
