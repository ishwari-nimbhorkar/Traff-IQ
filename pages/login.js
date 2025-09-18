"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter email & password");

    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // update Firestore last login
      await updateDoc(doc(db, "users", user.uid), { lastLoginAt: serverTimestamp() });

      alert("Login successful");
      window.location.href = "/user";
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setLoading(false);
  };

  // Send OTP for phone login
  const sendOTP = async () => {
    if (!phone) return alert("Enter phone number with country code");
    setLoading(true);

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier("recaptcha", { size: "invisible" }, auth);
      }

      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert("OTP sent to your phone");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP: " + err.message);
    }

    setLoading(false);
  };

  // Verify phone OTP
  const verifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) return alert("Enter OTP");
    setLoading(true);

    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;

      // create or update user in Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email || null,
          phone: user.phoneNumber,
          displayName: user.displayName || null,
          providers: ["phone"],
          roles: ["user"],
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
        },
        { merge: true }
      );

      alert("Phone login successful");
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Invalid OTP: " + err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen tracking-[0.1px]">
        {/* Left Side - Features */}
        <aside className="hidden lg:flex flex-col pl-60 -mt-16 justify-center items-start w-1/2 border-r border-[#eeeeee] bg-[#F4F4F5] p-12 space-y-8">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="Traff-IQ">
              <Image src="/images/IQ.png" alt="Traff-IQ Logo" width={60} height={60} priority />
            </Link>
            <h2 className="text-2xl font-poppins font-bold text-black">Traff-IQ</h2>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Predictive Traffic AI</h2>
            <p className="text-gray-600 text-sm">AI anticipates congestion before it happens, giving you routes that save minutes.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Urban Mobility Insights</h2>
            <p className="text-gray-600 text-sm">Understand city traffic patterns and make smarter travel decisions based on analytics.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Smart Alerts & Safety</h2>
            <p className="text-gray-600 text-sm">Receive proactive alerts on hazards, construction, or violations—helping you drive smarter.</p>
          </div>
        </aside>

        {/* Right Side - Login Form */}
        <section className="flex flex-col w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full max-w-md mx-auto bg-white p-8">
            <h2 className="text-2xl font-poppins font-medium text-gray-800 mb-6">Login</h2>

            {/* Email/Password Login */}
            <form onSubmit={handleEmailLogin} className="flex flex-col gap-3 w-full mb-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 text-zinc-900 ring-gray-200 focus:ring-zinc-600"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 text-zinc-900 ring-gray-200 focus:ring-zinc-600"
                required
              />
              <button
                type="submit"
                className="h-12 rounded-md border border-indigo-500 text-indigo-600 font-medium shadow-sm hover:bg-indigo-50 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login with Email"}
              </button>
            </form>

            <hr className="border-t border-gray-300 mb-6" />

            {/* Phone Login */}
            <form onSubmit={otpSent ? verifyOTP : (e) => e.preventDefault()} className="flex flex-col gap-3 w-full">
              <input
                type="tel"
                placeholder="+911234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 text-zinc-900 ring-gray-200 focus:ring-zinc-600"
                required={!otpSent}
                disabled={otpSent}
              />
              {otpSent && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="h-12 px-4 rounded-md text-sm ring-1 ring-gray-200 focus:ring-zinc-600"
                  required
                />
              )}
              {!otpSent ? (
                <button
                  type="button"
                  onClick={sendOTP}
                  className="h-12 rounded-md border border-indigo-500 text-indigo-600 font-medium shadow-sm hover:bg-indigo-50 transition"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              ) : (
                <button
                  type="submit"
                  className="h-12 rounded-md border border-indigo-500 text-indigo-600 font-medium shadow-sm hover:bg-indigo-50 transition"
                  disabled={loading}
                >
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              )}
              <div id="recaptcha"></div>
            </form>

            <p className="text-xs text-center text-zinc-700 mt-6">
              Forgot your password?{" "}
              <Link href="/reset-password" className="text-blue-600 hover:underline">
                Reset
              </Link>
            </p>

            <p className="text-xs text-center text-zinc-700 mt-2">
              New to Traff-IQ?{" "}
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}
