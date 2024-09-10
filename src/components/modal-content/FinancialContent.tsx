"use client";
import React, { ChangeEvent, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { PaystackButton } from "react-paystack";
import Withdrawal from "./Withdrawal";

type Props = {};

const FinancialContent = (props: Props) => {
	const [amount, setAmount] = useState<number>(0);
	const [selectedMethod, setSelectedMethod] = useState<string>("paystack");
	const [showNextStep, setShowNextStep] = useState<boolean>(false);

	const config = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: amount * 100, //Amount is in the country's lowest currency (Kobo)
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
	};

	const handlePaystackSuccessAction = (reference: any) => {
		console.log(reference);
	};

	const handlePaystackCloseAction = () => {
		console.log("closed");
	};

	const componentProps = {
		...config,
		text: "Continue",
		onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
		onClose: handlePaystackCloseAction,
	};

	// Handle Radio Button Change
	const handleMethodChange = (value: string) => {
		setSelectedMethod(value);
		setShowNextStep(false); // Reset to ensure next step is hidden initially
	};

	// Handle Next Button Click
	const handleNextClick = () => {
		setShowNextStep(true);
	};

	return (
		<div className="w-full px-4 md:px-0"> 
			<Tabs defaultValue="account" className="md:max-w-lg w-full mx-auto lg:w-[400px]"> 
				<TabsList className="flex justify-center"> 
					<TabsTrigger className="rounded-l-[20px]" value="fund">
						Add money
					</TabsTrigger>
					<TabsTrigger className="rounded-r-[20px]" value="withdraw">
						Withdrawal
					</TabsTrigger>
				</TabsList>
				<TabsContent value="fund">
					<div className="flex flex-col gap-8">
						<h1 className="text-[32px] text-white font-NunitoSans font-semibold">
							Add money
						</h1>
						<div className="flex flex-col gap-6">
							{/* Payment Method Selection */}
							<div className="flex flex-col gap-4 text-white">
								<RadioGroup value={selectedMethod} onValueChange={handleMethodChange}>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="paystack" id="r1" />
										<Label htmlFor="r1">Paystack</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="airtime" id="r2" />
										<Label htmlFor="r2">Airtime</Label>
									</div>
								</RadioGroup>
							</div>

							<div className="flex justify-end">
								<Button
									onClick={handleNextClick}
									className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
								>
									Next
								</Button>
							</div>

							{/* Display Step Based on Payment Method */}
							{showNextStep && selectedMethod === "paystack" && (
								<div className="flex flex-col gap-3">
									<div className="flex flex-col gap-3">
										<Label htmlFor="amount" className="text-white font-NunitoSans">
											Amount
										</Label>
										<Input
											id="amount"
											value={amount}
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												setAmount(parseFloat(e.target.value))
											}
											placeholder="₦"
											className="col-span-3"
											type="number"
										/>
									</div>

									{/* Continue Button */}
									<div className="flex justify-end">
										<Button className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]">
											<PaystackButton {...componentProps} />
										</Button>
									</div>
								</div>
							)}

							{/* Display Casino Options for Airtime */}
							{showNextStep && selectedMethod === "airtime" && (
								<div className="flex flex-col gap-3">
									<Button
										onClick={() =>
											window.location.href =
												"http://ng-app.com/PISI/play2win-on-demand-landing-en-doi-web?origin_banner=1&trxId=P100W-{clickid}-{sourceId}&trfsrc={traffic-source-url}"
										}
										className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
									>
										Casino 200
									</Button>

									<Button
										onClick={() =>
											window.location.href =
												"http://ng-app.com/PISI/play2win-on-demand-landing-en-doi-web?origin_banner=2&trxId=P100W-{clickid}-{sourceId}&trfsrc={traffic-source-url}"
										}
										className="bg-[#E903E733] rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
									>
										Casino 500
									</Button>
								</div>
							)}
						</div>
					</div>
				</TabsContent>

				{/* Withdrawal Tab */}
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
