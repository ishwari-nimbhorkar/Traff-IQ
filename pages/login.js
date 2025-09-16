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
            <h2 className="text-xl font-semibold text-gray-800  mb-[7px]">Ignite Your Traffic Vision</h2>
            <p className="text-gray-600 text-[14px]">
              Transform raw data into instant insights and see the city’s movement like never before.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Harness AI Instincts</h2>
            <p className="text-gray-600 text-[14px]">
            Let the system guide you with predictive intelligence—faster, smarter, sharper.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-[7px]">Activate Urban Command</h2>
            <p className="text-gray-600 text-[14px]">
              Step into a control hub where decisions flow seamlessly and every street listens.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col  w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full mt-4 mx-[-23px] max-w-md bg-white p-8 ">
            {/* Header */}
            <h2 className="font-medium font-poppins text-gray-800 text-2xl mb-6 ">Login to Power Up</h2>

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
                Login with Email
              </button>
            </form>
            <p className="text-xs   font-poppins   pr-1  text-zinc-800 text-center">
             
              <a
                href="/reset-password"
                className="text-blue-600 decoration-blue-600 hover:underline underline-offset-1"
              >
                Forgot your password?   
              </a>
            </p>

            {/* Footer Links */}
            <p className="text-xs  mt-10 font-poppins    pr-1 mb-10 text-zinc-700 text-center">
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
