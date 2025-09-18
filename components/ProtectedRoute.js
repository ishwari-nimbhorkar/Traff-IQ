"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;

      if (!user) {
        // not logged in
        setDenied(true);
        setMessage("You must be logged in to access this section. Redirecting to login…");
        setTimeout(() => router.replace("/login"), 2000);
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData?.roles?.includes("admin")) {
        // logged in as admin → go to higherAuthority
        router.replace("/higherAuthority");
        return;
      }

      // logged in but not admin → go to user
      setDenied(true);
      setMessage("Authority section is for admins only. Redirecting to user page…");
      setTimeout(() => router.replace("/user"), 2000);
    };

    checkAccess();
  }, [router]);

  if (loading && !denied) {
    return <p className="p-8 text-center">Loading...</p>;
  }

  if (denied) {
    return (
      <div className="flex items-center justify-center min-h-screen font-poppins bg-white">
        {/* Notification box */}
        <div className="items-center justify-center right-6 z-50 animate-fade-in">
          <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg">
            {message}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
