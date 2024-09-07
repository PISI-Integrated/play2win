"use client";
import React, { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { requestPasswordReset } from "@/services";

type Props = {
  handlerFunc: () => void;
  action: () => void; // Called when moving to the next step
};

const ResetPasswordPhone = ({ action }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("234");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  // Setting up mutation like in SignInContent
  const { mutate: sendResetToken, isPending } = useMutation({
    mutationFn: (phoneNumber: string) => requestPasswordReset(phoneNumber),
    onSuccess: () => {
      toast.success("Reset token sent successfully!");
      action(); // Move to the next modal for token/password input
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to send reset token"
      );
    },
  });

  function handleReset() {
    // Log the phone number being sent for verification
    console.log("Phone number being sent:", phoneNumber);

    // Optionally validate phone number format before sending
    if (!phoneNumber.startsWith("234") || phoneNumber.length < 10) {
      toast.error("Invalid phone number format");
      return;
    }

    // Send the request using mutate with phoneNumber as the argument
    sendResetToken(phoneNumber);
  }

  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="phone" className="text-white">
            Phone Number
          </Label>
          <Input
            name="phone"
            value={phoneNumber}
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button
          type="submit"
          onClick={handleReset}
          disabled={isPending}
          className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
        >
          {isPending ? (
            <ReloadIcon className="w-4 h-4 animate-spin mr-4" />
          ) : null}
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordPhone;
