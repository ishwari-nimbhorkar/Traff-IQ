"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children, requiredRole = "admin" }) {
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false); // track access denied
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;

      if (!user) {
        setDenied(true);
        setTimeout(() => router.replace("/login"), 2000);
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (!userData || !userData.roles.includes(requiredRole)) {
        setDenied(true);
        setTimeout(() => router.replace("/user"), 2000);
        return;
      }

      setLoading(false);
    };

    checkAccess();
  }, [router, requiredRole]);

  if (loading && !denied) {
    return <p className="p-8 text-center">Loading...</p>;
  }

  if (denied) {
    return (
      <div className="flex items-center justify-center min-h-screen font-poppins bg-white">
        {/* Notification box */}
        <div className="items-center justify-center right-6 z-50 animate-fade-in">
          <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg">
            Authority section is for <span className="font-semibold">admins only</span>. <br />Not for the users. 
            Redirecting…
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
