"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: Add real reset password logic (API call)
  console.log({ email, otp, newPassword, confirmPassword });
};


  return (
    <>
      <Navbar />
      <div className="flex tracking-[0.1px] min-h-screen">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col pl-60 mt-[-60px] justify-center items-start w-1/2 border-r border-[#eeeeee] bg-[#F4F4F5] p-12 space-y-8">
          {/* Logo and Title */}
          <div className="flex items-center gap-1">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F4F4F5]">
              <Link href="https://botpress.com" target="_blank">
                <Image
                  src="/images/IQ.png"
                  alt="Traff-IQ Logo"
                  width={60}
                  height={60}
                  priority
                />
              </Link>
            </div>
            <h2 className="text-2xl text-black font-poppins font-bold">
              Traff-IQ
            </h2>
          </div>

          {/* Steps Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Enter Your Email
            </h2>
            <p className="text-gray-600 text-sm">
              Provide your registered email address to begin resetting your
              password.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Verify with OTP
            </h2>
            <p className="text-gray-600 text-sm">
              A One-Time Password has been sent to your email. Enter it to
              confirm your identity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Set New Password
            </h2>
            <p className="text-gray-600 text-sm">
              Create and confirm your new password. Congrats! Your password has
              been reset successfully.
            </p>
          </div>
        </div>

        {/* Right Section - Reset Form */}
        <div className="flex flex-col w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full mt-12 mx-auto max-w-md bg-white p-8">
            {/* Header */}
            <h2 className="font-medium font-poppins text-gray-800 text-2xl mb-6">
              Reset Password
            </h2>

            {/* Reset Password Form */}
            <form
              className="flex flex-col font-poppins gap-3 w-full mb-4"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <button
                type="submit"
                className="hover:bg-indigo-50 font-poppins rounded-md border border-indigo-500 text-indigo-600 text-sm font-medium shadow-sm w-full h-12"
              >
                Confirm
              </button>
            </form>

            {/* Navigation Links */}
            <p className="text-xs mt-1 font-poppins text-zinc-700 text-center">
              Remember password?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline underline-offset-1"
              >
                Login
              </Link>
            </p>
            <p className="text-xs mt-2 font-poppins text-zinc-700 text-center">
              New to Traff-IQ?{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 hover:underline underline-offset-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
