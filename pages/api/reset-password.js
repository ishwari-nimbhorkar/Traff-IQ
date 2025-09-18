// pages/api/reset-password.js
import bcrypt from "bcryptjs";
import { db } from "../../lib/firebase.js"; // Firestore instance
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, otp, newPassword } = req.body;

    // Validate input
    if (!email || !otp || !newPassword) {
      return res
        .status(400)
        .json({ error: "Email, OTP, and new password are required" });
    }

    // 1. Get user document from Firestore
    const userRef = doc(db, "users", email); // assuming email is document ID
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = userSnap.data();

    // 2. Verify OTP
    if (user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // 3. Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 4. Update password and clear OTP
    await updateDoc(userRef, {
      password: hashedPassword,
      otp: null,
    });

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
