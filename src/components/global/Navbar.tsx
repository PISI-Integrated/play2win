"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  ChevronDown,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Dialog, Transition } from "@headlessui/react";
import SignUpContent from "../auth/SignUpContent";
import SignInContent from "../auth/SignInContent";
import VerifyOTP from "../auth/VerifyOTP";
//import ResetPasswordPhone from "../auth/ResetPasswordPhone";
import ResetPasswordConfirm from "../auth/ResetPasswordConfirm";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CustomButton from "../CustomButton";
import PotentialContainer from "../PotentialContainer";
import FinancialContent from "../modal-content/FinancialContent";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services";
import ResetPasswordPhone from "../auth/ResePasswordPhone";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);
  let [isPay, setIsPay] = useState(false);
  let [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
  let [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function closeModal3() {
    setIsOpen3(false);
  }
  function closePayModal() {
    setIsPay(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function openModal3() {
    setIsOpen3(true);
  }
  function openPayModal() {
    setIsPay(true);
  }
  function closeModalForgotPassword() {
    setIsOpenForgotPassword(false);
  }
  function openModalForgotPassword() {
    setIsOpenForgotPassword(true);
  }
  function closeModalResetPassword() {
    setIsOpenResetPassword(false);
  }
  function openModalResetPassword() {
    setIsOpenResetPassword(true);
  }

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });

  function handleLogout() {
    Cookies.remove("token");
    //toast.success("You have successfully logged out.");
    router.push("/"); // Redirect to the landing page
    window.location.reload(); // Refresh the page
  }

  return (
    <nav className="">
      <div className=" flex items-center justify-between xl:gap-11 py-4 md:py-8 ">
        <Link href="/" className="hidden md:flex cursor-pointer flex-col gap-2">
          <div>
            <Image
              src="/Logo.svg"
              width={69}
              height={47}
              className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
              alt="Logo"
            />
          </div>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex md:hidden flex-col gap-2">
              <div>
                <Image
                  src="/Logo.png"
                  width={69}
                  height={47}
                  className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
                  alt="Logo"
                />
              </div>
            </div>
          </SheetTrigger>
          <SheetContent className="gradient">
            <div className="w-full grid gap-4">
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-[#CCB7E6] dark:text-white text-xs md:text-sm font-medium">
                    Available balance:
                  </h1>
                  <p className="text-sm text-white font-medium">
                    ₦{data?.wallet_balance}
                  </p>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Button
                    onClick={openPayModal}
                    className=" uppercase  text-xs text-white font-NunitoSans font-bold  primary-color rounded-full w-full h-[32px]"
                  >
                    <PlusIcon className="w-6 h-6 " />
                    Add money
                  </Button>
                  <Button
                    onClick={openPayModal}
                    className="bg-[#E903E733] rounded-[100px] w-full h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
                  >
                    Withdraw
                    <MinusIcon className="w-6 h-6 " />
                  </Button>
                </div>
                <div className="w-full">
                  <SheetTrigger asChild>
                    <Link href="/" className="w-full h-[32px] p-2">
                      <div className="flex items-center gap-2 ">
                        <h1 className="text-white">Home</h1>
                      </div>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      href="/terms-conditions"
                      className="w-full h-[32px] p-2"
                    >
                      <div className="flex items-center gap-2 ">
                        <h1 className="text-white">Terms & Conditions</h1>
                      </div>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      href="/privacy-policy"
                      className="w-full h-[32px] p-2"
                    >
                      <div className="flex items-center gap-2 ">
                        <h1 className="text-white">Privacy Policy</h1>
                      </div>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href="/about" className="w-full h-[32px] p-2">
                      <div className="flex items-center gap-2 ">
                        <h1 className="text-white">About Us</h1>
                      </div>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href="/help" className="w-full h-[32px] p-2">
                      <div className="flex items-center gap-2 ">
                        <h1 className="text-white">Help</h1>
                      </div>
                    </Link>
                  </SheetTrigger>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex xl:flex-1 items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-white">
            <Link href="/" className="cool-hover cursor-pointer">
              <p className="font-semibold ">Home</p>
              <div
                className={` ${
                  pathName === "/" ? "flex" : "hidden"
                } h-[5px] rounded-[5px]  bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link
              href="/terms-conditions"
              className="cool-hover cursor-pointer"
            >
              <p className=" font-semibold">Terms & Conditions</p>
              <div
                className={`${
                  pathName === "/terms-conditions" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link
              href="/privacy-policy"
              className="cool-hover cursor-pointer"
            >
              <p className=" font-semibold">Privacy policy</p>
              <div
                className={`${
                  pathName === "/privacy-policy" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/about" className="cool-hover cursor-pointer">
              <p className=" font-semibold">About Us</p>
              <div
                className={`${
                  pathName === "/about" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/help" className="cool-hover cursor-pointer">
              <p className=" font-semibold">Help</p>
              <div
                className={`${
                  pathName === "/help" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              {data ? (
                <PopoverTrigger className=" cursor-pointer" asChild>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.pn"
                        alt="@shadcn"
                      />
                      <AvatarFallback>{data?.username?.split("")[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>
              ) : null}
              <PopoverContent className="w-full md:w-full gradient rounded-[25px]">
                <div className="w-full grid gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage
                        src="https://github.com/shadcn.p"
                        alt="@shadcn"
                      />
                      <AvatarFallback>{data?.username?.split("")[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-white dark:text-white text-sm md:text-base font-medium">
                        {data?.username}
                      </h1>
                      <p className="text-[10px]  text-[#8D91BB] font-medium">
                        ID:{" "}
                        <span className="text-xs  text-[#8D91BB]">{data?.id}</span>
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-[#CCB7E6] dark:text-white text-xs md:text-sm font-medium">
                        Available balance:
                      </h1>
                      <p className="text-sm text-white font-medium">
                        ₦{data?.wallet_balance}
                      </p>
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <Button
                        onClick={openPayModal}
                        className=" uppercase  text-xs text-white font-NunitoSans font-bold  primary-color rounded-full w-full h-[32px]"
                      >
                        <PlusIcon className="w-6 h-6 " />
                        Add money
                      </Button>
                      <Button
                        onClick={openPayModal}
                        className="bg-[#E903E733] hidden md:flex rounded-[100px] w-full h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border border-[#F002EE]"
                      >
                        Withdraw
                        <MinusIcon className="w-6 h-6 " />
                      </Button>
                    </div>
					{/* Logout Button */}
                    <Button
                      onClick={handleLogout}
                      className="uppercase text-xs text-white font-NunitoSans font-bold bg-red-500 rounded-full w-full h-[32px] border border-[#F002EE] hover:bg-red-900"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {!data ? (
              <>
			  	<Button
                  onClick={openModal2}
                  className=" uppercase primary-color rounded-full ml-2"
                >
                  Sign In
                </Button>
                <Button onClick={openModal} className=" uppercase primary-color rounded-full ">
                  Sign up
                </Button>
              </>
            ) : null}

            {/* Sign Up Modal */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100 "
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="div" className="text-lg font-medium leading-6 text-gray-900 mb-8">
                          <div className="flex justify-between items-center">
                            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                              Create an account
                            </h1>
                            <XIcon onClick={closeModal} className="flex md:hidden text-white" />
                          </div>
                        </Dialog.Title>
                        <SignUpContent
                          switchToSignIn={() => {
                            closeModal();
                            openModal2();
                          }}
                          action={() => {
                            closeModal();
                            openModal3();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Sign In Modal */}
            <Transition appear show={isOpen2} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal2}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100 "
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="div" className="text-lg font-medium leading-6 text-gray-900 mb-8">
                          <div className="flex justify-between items-center">
                            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                              Sign In
                            </h1>
                            <XIcon onClick={closeModal2} className="flex md:hidden text-white" />
                          </div>
                        </Dialog.Title>
                        <SignInContent
                          handlerFunc={() => {
                            openModal();
                            closeModal2();
                          }}
                          action={() => {
                            closeModal2();
                          }}
                          forgotPasswordFunc={() => {
                            closeModal2();
                            openModalForgotPassword();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* OTP Verification Modal */}
            <Transition appear show={isOpen3} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal3}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-2 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="div" className="text-lg font-medium leading-6 text-gray-900 mb-8">
                          <div className="flex justify-between items-center">
                            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                              Enter OTP
                            </h1>
                            <XIcon onClick={closeModal3} className="flex md:hidden text-white" />
                          </div>
                        </Dialog.Title>
                        <VerifyOTP
                          handlerFunc={() => {
                            openModal();
                            closeModal2();
                          }}
                          action={() => {
                            closeModal3();
                            openModal2();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Reset Password Phone Modal */}
            <Transition appear show={isOpenForgotPassword} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalForgotPassword}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-2 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="div" className="text-lg font-medium leading-6 text-gray-900 mb-8">
                          <div className="flex justify-between items-center">
                            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                              Reset Password
                            </h1>
                            <XIcon onClick={closeModalForgotPassword} className="flex md:hidden text-white" />
                          </div>
                        </Dialog.Title>
                        <ResetPasswordPhone
                          handlerFunc={() => {
                            openModal();
                            closeModal2();
                          }}
                          action={() => {
                            closeModalForgotPassword();
                            openModalResetPassword();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Reset Password Confirmation Modal */}
            <Transition appear show={isOpenResetPassword} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalResetPassword}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-2 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="div" className="text-lg font-medium leading-6 text-gray-900 mb-8">
                          <div className="flex justify-between items-center">
                            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                              Confirm New Password
                            </h1>
                            <XIcon onClick={closeModalResetPassword} className="flex md:hidden text-white" />
                          </div>
                        </Dialog.Title>
                        <ResetPasswordConfirm
                          action={() => {
                            return closeModalResetPassword();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Financial Content Modal */}
            <Transition appear show={isPay} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closePayModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100 "
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-[#00000099]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto  ">
                  <div className="flex min-h-full items-center justify-center p-4 text-center ">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="bg-gradient-to-br via-[#0C0E45] to-[#8A0189] from-[#0C0E45] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <FinancialContent />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
