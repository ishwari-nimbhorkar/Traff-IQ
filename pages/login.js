"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { saveUserToCache } from "../utils/authCache"; // adjust path if needed
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Save or update user in Firestore and preserve roles
const saveUser = async (user, provider) => {
  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  let role = "user"; // default role

  if (!userDoc.exists()) {
    // New user → assign default role
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
      providers: [provider],
      roles: ["user"],
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });
  } else {
    // Existing user → preserve roles
    const existingData = userDoc.data();
    role = existingData.roles?.[0] || "user"; // preserve first role

    await updateDoc(userRef, {
      email: user.email || existingData.email,
      displayName: user.displayName || existingData.displayName,
      photoURL: user.photoURL || existingData.photoURL,
      providers: [...new Set([...(existingData.providers || []), provider])],
      lastLoginAt: serverTimestamp(),
      // roles preserved → do not overwrite
    });
  }

  return role;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter email & password");

    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // Update last login
      await updateDoc(doc(db, "users", user.uid), { lastLoginAt: serverTimestamp() });

      // Fetch role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      const role = userData?.roles?.[0] || "user";

      // ✅ Save user to localStorage for Navbar
      saveUserToCache({
        displayName: userData?.displayName || user.email.split("@")[0],
        email: user.email,
      });

      alert("Login successful");

      // Redirect based on role
      if (role.toLowerCase() === "admin") {
        window.location.href = "/higherAuthority";
      } else {
        window.location.href = "/user";
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      // Save/update user and get role
      const role = await saveUser(user, "google");

      // ✅ Save user to localStorage for Navbar
      saveUserToCache({
        displayName: user.displayName || user.email.split("@")[0],
        email: user.email,
      });

      alert("Google login successful");

      // Redirect based on role
      if (role.toLowerCase() === "admin") {
        window.location.href = "/higherAuthority";
      } else {
        window.location.href = "/user";
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
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
        <section className="flex flex-col w-full lg:w-[520px] bg-white px-8 mt-10 lg:px-16 py-12">
          <div className="flex flex-col w-full max-w-md mx-auto bg-white p-8">
            <h2 className="text-2xl font-poppins font-medium text-gray-800 mb-6">Login</h2>

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
                <Image src="/images/microsoft.png" alt="Microsoft" width={16} height={16} />
                <span>Sign in with Microsoft</span>
              </button>
            </div>

            <hr className="border-t border-gray-300 mb-6" />

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

            <p className="text-xs text-center text-zinc-700 mt-6">
              Forgot your password?{" "}
              <Link href="/reset-pass" className="text-blue-600 hover:underline">
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
