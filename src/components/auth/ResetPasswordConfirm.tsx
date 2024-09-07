"use client";
import React, { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { resetPasswordConfirm } from "@/services";  // Import the service function

type Props = {
  action: () => void; // Called when password reset is successful
};

const ResetPasswordConfirm = ({ action }: Props) => {
  const [formDetails, setFormDetails] = useState({
    phone: "234",  // Default value for the phone number
    token: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: async () => {
      // The API call only occurs if the passwords match, which is validated before this point
      return resetPasswordConfirm(formDetails.phone, formDetails.token, formDetails.newPassword);
    },
    onSuccess: () => {
      toast.success("Password reset successfully!");
      action();  // Close modal or redirect user after success
    },
    onError: (error: any) => {
      // Display appropriate error message
      toast.error(
        error?.response?.data?.message || "Failed to reset password"
      );
    },
  });

  const handleSubmit = () => {
    // Check if newPassword and confirmPassword are the same
    if (formDetails.newPassword !== formDetails.confirmPassword) {
      toast.error("Passwords do not match");
      return; // Return early if passwords do not match
    }

    // Proceed with the mutation if the passwords match
    resetPassword();
  };

  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="phone" className="text-white">
            Phone Number
          </Label>
          <Input
            name="phone"
            value={formDetails.phone}
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="token" className="text-white">
            Token
          </Label>
          <Input
            name="token"
            value={formDetails.token}
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="newPassword" className="text-white">
            New Password
          </Label>
          <Input
            name="newPassword"
            type="password"
            value={formDetails.newPassword}
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="confirmPassword" className="text-white">
            Confirm New Password
          </Label>
          <Input
            name="confirmPassword"
            type="password"
            value={formDetails.confirmPassword}
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button
          type="submit"
          onClick={handleSubmit}  // Trigger the handleSubmit function
          disabled={isPending}
          className="bg-[#E903E733] hover:bg-[#E903E733] border border-[#F002EE] text-xs uppercase px-11"
        >
          {isPending ? (
            <ReloadIcon className="w-4 h-4 animate-spin mr-4" />
          ) : null}
          Set Password
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
