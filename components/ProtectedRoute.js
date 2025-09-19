"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // ❌ not logged in
        setDenied(true);
        setMessage("You must be logged in to access this section. Redirecting to login…");
        setTimeout(() => router.replace("/login"), 2000);
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        if (userData?.roles?.some(r => r.toLowerCase() === "admin")) {
          // ✅ admin → allow access
          setIsAdmin(true);
          setLoading(false);
          return;
        }

        // ❌ logged in but not admin
        setDenied(true);
        setMessage("Authority section is for admins only. Redirecting to user page…");
        setTimeout(() => router.replace("/user"), 2000);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setDenied(true);
        setMessage("Error checking permissions. Redirecting to login…");
        setTimeout(() => router.replace("/login"), 2000);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading && !denied) {
    return <p className="p-8 text-center">Loading...</p>;
  }

  if (denied) {
    return (
      <div className="flex items-center justify-center min-h-screen font-poppins bg-black">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 space-y-4 animate-fade-in max-w-sm text-center">
          <h2 className="text-[20px] font-semibold text-red-600">Access Restricted</h2>
          <p className="text-gray-700 text-[15px]">
            This section is strictly restricted and accessible only to{" "}
            <b>Administrators or Authorized Personnel</b>. Unauthorized access is
            strictly prohibited.
          </p>
          <p className="text-gray-700 text-[15px]">
            Only users with verified administrative credentials are permitted.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Need Help?
          </button>
        </div>
      </div>
    );
  }

  // ✅ If admin → show children (higherAuthority page)
  if (isAdmin) {
    return <>{children}</>;
  }

  return null;
}
