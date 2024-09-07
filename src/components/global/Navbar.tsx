"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState, ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Dialog, Transition } from "@headlessui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import SignUpContent from "../auth/SignUpContent";
import SignInContent from "../auth/SignInContent";
import VerifyOTP from "../auth/VerifyOTP";
import { getMe } from "@/services";
import ResetPasswordPhone from "../auth/ResePasswordPhone";
import ResetPasswordConfirm from "../auth/ResetPasswordConfirm";

// Navbar component
const Navbar = (props: {}) => {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  // Modal open/close handlers
  function closeModalSignIn() {
    setIsOpenSignIn(false);
  }
  function openModalSignIn() {
    setIsOpenSignIn(true);
  }

  function closeModalSignUp() {
    setIsOpenSignUp(false);
  }
  function openModalSignUp() {
    setIsOpenSignUp(true);
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

  return (
    <nav>
      <div className="flex items-center justify-between xl:gap-11 py-4 md:py-8">
        <Link href="/" className="hidden md:flex cursor-pointer flex-col gap-2">
          <Image
            src="/Logo.svg"
            width={69}
            height={47}
            className="w-[51px] md:w-[69px] h-[35px] md:h-[47px]"
            alt="Logo"
          />
        </Link>

        <div className="flex xl:flex-1 items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-white">
            <Link href="/" className="cool-hover cursor-pointer">
              <p className="font-semibold ">Home</p>
              <div
                className={`${
                  pathName === "/" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/terms-conditions" className="cool-hover cursor-pointer">
              <p className="font-semibold">Terms & Conditions</p>
              <div
                className={`${
                  pathName === "/terms-conditions" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/privacy-policy" className="cool-hover cursor-pointer">
              <p className="font-semibold">Privacy Policy</p>
              <div
                className={`${
                  pathName === "/privacy-policy" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/about" className="cool-hover cursor-pointer">
              <p className="font-semibold">About Us</p>
              <div
                className={`${
                  pathName === "/about" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
            <Link href="/help" className="cool-hover cursor-pointer">
              <p className="font-semibold">Help</p>
              <div
                className={`${
                  pathName === "/help" ? "flex" : "hidden"
                } h-[5px] rounded-[5px] bg-gradient-to-tr from-[#F002EE] to-[#8A0189]`}
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {!data ? (
              <div className="gap-2 w-62 flex justify-between">
                <Button
                  onClick={openModalSignIn}
                  className="uppercase primary-color rounded-full"
                >
                  Sign in
                </Button>
                <Button
                  onClick={openModalSignUp}
                  className="uppercase primary-color rounded-full"
                >
                  Sign up
                </Button>
              </div>
            ) : null}

            {/* Sign Up Modal */}
            <Transition appear show={isOpenSignUp} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModalSignUp}>
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
						<Dialog.Title className="text-[32px] text-white font-NunitoSans font-semibold">
						Sign Up
						</Dialog.Title>
						<SignUpContent
						action={closeModalSignUp}
						switchToSignIn={() => {
							closeModalSignUp();
							openModalSignIn();
						}}
						/>
          			</Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Sign In Modal */}
            <Transition appear show={isOpenSignIn} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModalSignIn}>
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
                        <Dialog.Title className="text-[32px] text-white font-NunitoSans font-semibold">
                          Sign In
                        </Dialog.Title>
                        <SignInContent
                          handlerFunc={() => {
                            closeModalSignIn();
                            openModalSignUp();
                          }}
                          action={closeModalSignIn}
                          forgotPasswordFunc={() => {
                            closeModalSignIn();
                            openModalForgotPassword();
                          }}
                        />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Forgot Password Modal */}
            {/* Reset Password Modals... */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;