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
              <link href="https://botpress.com" target="_blank" rel="noopener noreferrer" className="">
              <Image
                src="/images/IQ.png"
                alt="traffiq Logo"
                width={60}
                height={60}
              />
            </link>
            </div>
            <h2 className="text-2xl text-black font-poppins font-bold">Traff-IQ</h2>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800  mb-[7px]">Predictive Traffic AI</h2>
            <p className="text-gray-600 text-[14px]">
              AI anticipates congestion before it happens, giving you routes that save minutes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Urban Mobility Insights</h2>
            <p className="text-gray-600 text-[14px]">
            Understand city traffic patterns and make smarter travel decisions based on analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Smart Alerts & Safety </h2>
            <p className="text-gray-600 text-[14px]">
              Receive proactive alerts on hazards, construction, or violations—helping you drive smarter.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col  w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full mt-4 mx-[-23px] max-w-md bg-white p-8 ">
            {/* Header */}
            <h2 className="font-medium font-poppins text-gray-800 text-2xl mb-6 ">Get Started</h2>

            {/* Social Buttons */}
            <div className="flex flex-col w-full gap-3 mb-6">
              {[
                { provider: "Google", icon: "/images/google.png", color: "border-zinc-500 text-zinc-700 hover:bg-zinc-100" },
                { provider: "Microsoft", icon: "/images/microsoft.png", color: "border-zinc-500 text-zinc-700 hover:bg-zinc-100" },
            
              ].map((social) => (
                <button
                  key={social.provider}
                  className={`group flex items-center font-poppins justify-center cursor-pointer border rounded-md text-sm font-medium px-4 py-3 shadow-sm ${social.color}`}
                  onClick={() => handleSocialSignup(social.provider)}
                >
                  <Image
                    className="w-4 h-4 mr-3"
                    src={social.icon}
                    alt={social.provider}
                    width={16}
                    height={16}
                  />
                  <div className="text-sm">Sign up with {social.provider}</div>
                </button>
              ))}
            </div>

            <hr className="border-t text-gray-300 mb-10 my-4 w-full" />

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
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm leading-6 rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />
              <button
                type="submit"
                className="hover:bg-indigo-50 font-poppins rounded-md border border-indigo-500 text-indigo-600 text-sm font-medium shadow-sm w-full h-12"
              >
                Sign up with Email
              </button>
            </form>

            {/* Footer Links */}
            <p className="text-xs mb-2 font-poppins text-left mb-10 text-zinc-700 text-center">
              Already have an account?{" "}
              <link
                href="/login"
                className="text-blue-600 decoration-blue-600 hover:underline underline-offset-1"
              >
                Login
              </link>
            </p>

            <p className="text-xs mb-4 font-poppins tracking[0.1px] text-left text-zinc-700 ">
              By signing up, you agree to our{" "}
              <link
                href="/essentials/#privacy-policy"
                target="_blank"
                className="text-primary font-medium text-blue-600 decoration-primary hover:underline underline-offset-1"
              >
                Privacy Policy
              </link>{" "}
              and{" "}
              <link
                href="/essentials/#terms-conditions"
                target="_blank"
                className="text-primary font-medium text-blue-600 decoration-primary hover:underline underline-offset-1"
              >
                Terms and Conditions
              </link>.
            </p>

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
