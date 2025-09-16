"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic (Firebase, NextAuth, or custom API)
    console.log("Email signup:", { email, password });
  };

  const handleSocialSignup = (provider) => {
    // TODO: Integrate OAuth/social login here (Google, Github, etc.)
    console.log(`Sign up with ${provider}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex tracking-[0.1px] min-h-screen">
        {/* Left Side - Text Content */}
        <div className="hidden lg:flex flex-col pl-60 mt-[-60px] justify-center items-start w-1/2 border-r-2 border-r-[#eeeeee] bg-[#F4F4F5] p-12 space-y-8">
          {/* Logo and Title */}
          <div className="flex items-center gap-1">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F4F4F5] ">
              <a href="https://botpress.com" target="_blank" rel="noopener noreferrer" className="">
              <Image
                src="/images/IQ.png"
                alt="traffiq Logo"
                width={60}
                height={60}
              />
            </a>
            </div>
            <h2 className="text-2xl text-black font-poppins font-bold">Traff-IQ</h2>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800  mb-[7px]">Enter Your Email</h2>
            <p className="text-gray-600 text-[14px]">
              Provide your registered email address to begin resetting your password.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Verify with OTP</h2>
            <p className="text-gray-600 text-[14px]">
            A One-Time Password has been sent to your email. Enter it to confirm your identity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Set New Password</h2>
            <p className="text-gray-600 text-[14px]">
              Create and confirm your new password. Congrats! Your password has been reset successfully.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col  w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full mt-12 mx-[-23px] max-w-md bg-white p-8 ">
            {/* Header */}
            <h2 className="font-medium font-poppins text-gray-800 text-2xl mb-6 ">Reset Password</h2>



            {/* Email/Password Form */}
            <form className="flex flex-col font-poppins gap-3 w-full mb-4" onSubmit={handleEmailSignup}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm leading-6 rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                name="otp"
                type="otp"
                placeholder="Enter OTP"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm leading-6 rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                name="newpassword"
                type="newpassword"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm leading-6 rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <input
                name="confirm password"
                type="confirmpassword"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm leading-6 rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <button
                type="submit"
                className="hover:bg-indigo-50 font-poppins rounded-md border border-indigo-500 text-indigo-600 text-sm font-medium shadow-sm w-full h-12"
              >
                Confirm
              </button>
            </form>
            <p className="text-xs  mt-1 font-poppins    pr-1 mb-1 text-zinc-700 text-center">
              Remember password?{" "}
              <a
                href="/login"
                className="text-blue-600 decoration-blue-600 hover:underline underline-offset-1"
              >
               Login
              </a>
            </p>

            {/* Footer Links */}
            <p className="text-xs  mt-2 font-poppins    pr-1 mb-10 text-zinc-700 text-center">
              New to Traff-IQ?{" "}
              <a
                href="/sign-up"
                className="text-blue-600 decoration-blue-600 hover:underline underline-offset-1"
              >
                Sign up
              </a>
            </p>

            

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
