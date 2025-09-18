"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/lib/firebase";
import {
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetCode, setResetCode] = useState(""); // Firebase oobCode (from email link)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Send Firebase Reset Email
  const handleSendResetLink = async () => {
    if (!email) {
      setMessage("❌ Please enter your email first");
      return;
    }
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset link sent to your email.");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Confirm New Password (using oobCode from email link)
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!resetCode) {
      setMessage("❌ Enter the reset code from your email link");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      // Verify code is valid
      await verifyPasswordResetCode(auth, resetCode);

      // Confirm new password
      await confirmPasswordReset(auth, resetCode, newPassword);

      setMessage("✅ Password reset successful. You can now login.");
      setEmail("");
      setResetCode("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex tracking-[0.1px] min-h-screen">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col pl-60 mt-[-60px] justify-center items-start w-1/2 border-r border-[#eeeeee] bg-[#F4F4F5] p-12 space-y-8">
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
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Enter Your Email
            </h2>
            <p className="text-gray-600 text-sm">
              Provide your registered email address to get a password reset
              link.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Check Email
            </h2>
            <p className="text-gray-600 text-sm">
              A link will be sent to your email. Copy the reset code from it.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Set New Password
            </h2>
            <p className="text-gray-600 text-sm">
              Enter the reset code, new password, and confirm it.
            </p>
          </div>
        </div>

        {/* Right Section - Reset Form */}
        <div className="flex flex-col w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full mt-12 mx-auto max-w-md bg-white p-8">
            <h2 className="font-medium font-poppins text-gray-800 text-2xl mb-6">
              Reset Password
            </h2>

            {/* Reset Password Form */}
            <form
              className="flex flex-col font-poppins gap-3 w-full mb-4"
              onSubmit={handleResetPassword}
            >
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
                required
              />

              {/* Send Reset Email */}
              <button
                type="button"
                onClick={handleSendResetLink}
                className="hover:bg-indigo-50 font-poppins rounded-md border border-indigo-500 text-indigo-600 text-xs font-medium shadow-sm w-full h-10"
                disabled={!email || loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>

              {/* Reset Code Input */}
              <input
                type="text"
                placeholder="Enter Reset Code"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
              />

              {/* New Password */}
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
              />

              {/* Confirm Password */}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="focus:ring-1 focus:outline-none w-full text-sm rounded-md ring-1 shadow-sm transition duration-300 focus:ring-zinc-600 ring-gray-200 placeholder-zinc-400 text-zinc-900 hover:bg-zinc-50 h-12 px-4"
              />

              <button
                type="submit"
                className="hover:bg-indigo-50 font-poppins rounded-md border border-indigo-500 text-indigo-600 text-sm font-medium shadow-sm w-full h-12"
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm"}
              </button>
            </form>

            {message && (
              <p className="text-sm text-center mt-2 font-poppins">{message}</p>
            )}

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
