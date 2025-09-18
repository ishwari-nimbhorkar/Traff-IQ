"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children, requiredRole = "admin" }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;

      if (!user) {
        router.replace("/login");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (!userData || !userData.roles.includes(requiredRole)) {
        router.replace("/user");
        return;
      }

      setLoading(false);
    };

    checkAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- empty deps array is OK here
  // router is stable in next/navigation, no need to add it

  if (loading) return <p className="p-8 text-center">Loading...</p>;

  return <>{children}</>;
}
