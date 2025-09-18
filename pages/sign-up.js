"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Signup() {
  const [name, setName] = useState(""); // ✅ New Name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState(""); // Mobile number
  const [loading, setLoading] = useState(false);

  // Save user in Firestore
  const saveUser = async (user, provider) => {
    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        displayName: name || user.displayName || "", // Save Name
        email: user.email || null,
        phone: mobile || user.phoneNumber || "", // Save Mobile
        photoURL: user.photoURL || "",
        providers: [provider],
        roles: ["user"],
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      },
      { merge: true }
    );
  };

  // Signup with email/password
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await saveUser(res.user, "password");
      alert("Account created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setLoading(false);
  };

  // Social signup
 const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await saveUser(user, "google");
      alert("Google login successful");
      window.location.href = "/user";
    } catch (err) {
      console.error(err);
      alert(err.message);
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
              <Image
                src="/images/IQ.png"
                alt="Traff-IQ Logo"
                width={60}
                height={60}
                priority
              />
            </Link>
            <h2 className="text-2xl font-poppins font-bold text-black">Traff-IQ</h2>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Predictive Traffic AI</h2>
            <p className="text-gray-600 text-sm">
              AI anticipates congestion before it happens, giving you routes that save minutes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Urban Mobility Insights</h2>
            <p className="text-gray-600 text-sm">
              Understand city traffic patterns and make smarter travel decisions based on analytics.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Register as Admin</h2>
            <p className="text-gray-600 text-sm">
    Send the request to using the mail to <Link
  href="mailto:ishwarinimbbhorkar1234@gamil.com"
  className="text-blue-600 hover:underline"
>Authority</Link>,with verification details. Once Approve you will recieve your id and pass on your registered mail.
            </p>
          </div>
        </aside>

        {/* Right Side - Signup Form */}
        <section className="flex flex-col w-full lg:w-[520px] bg-white px-8 lg:px-16 py-12">
          <div className="flex flex-col w-full max-w-md mx-auto bg-white p-8">
            <h2 className="text-2xl font-poppins font-medium text-gray-800 mb-6">Get Started</h2>

           {/* Social Login */}
                       <div className="flex flex-col gap-3 mb-6">
                         <button
                           type="button"
                           onClick={handleGoogleLogin}
                           className="flex items-center text-zinc-900 justify-center gap-3 border rounded-md text-sm font-medium px-4 py-3 shadow-sm hover:bg-gray-100 transition"
                         >
                           <Image src="/images/google.png" alt="Google" width={16} height={16} />
                           <span>Sign in with Google</span>
                         </button>
                          <button
                           type="button"
                           onClick={handleGoogleLogin}
                           className="flex items-center text-zinc-900 justify-center gap-3 border rounded-md text-sm font-medium px-4 py-3 shadow-sm hover:bg-gray-100 transition"
                         >
                           <Image src="/images/microsoft.png" alt="Google" width={16} height={16} />
                           <span>Sign in with Microsoft</span>
                         </button>
                       </div>
           
                       <hr className="border-t border-gray-300 mb-6" /> 

            {/* Email Signup */}
            <form className="flex flex-col gap-3 w-full mb-4" onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 ring-gray-200 text-zinc-900 placeholder-zinc-400 focus:ring-1 focus:ring-zinc-600 hover:bg-zinc-50 transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 ring-gray-200 text-zinc-900 placeholder-zinc-400 focus:ring-1 focus:ring-zinc-600 hover:bg-zinc-50 transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 ring-gray-200 text-zinc-900 placeholder-zinc-400 focus:ring-1 focus:ring-zinc-600 hover:bg-zinc-50 transition"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="h-12 px-4 rounded-md text-sm ring-1 ring-gray-200 text-zinc-900 placeholder-zinc-400 focus:ring-1 focus:ring-zinc-600 hover:bg-zinc-50 transition"
                required
              />
              <button
                type="submit"
                className="h-12 rounded-md border border-indigo-500 text-indigo-600 text-sm font-medium shadow-sm hover:bg-indigo-50 transition"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <p className="text-xs text-center text-zinc-700 mb-6">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline underline-offset-1">
                Login
              </Link>
            </p>
            <p className="text-xs text-zinc-700">
              By signing up, you agree to our{" "}
              <Link href="/essentials/#privacy-policy" className="text-blue-600 font-medium hover:underline underline-offset-1">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/essentials/#terms-conditions" className="text-blue-600 font-medium hover:underline underline-offset-1">
                Terms and Conditions
              </Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}
