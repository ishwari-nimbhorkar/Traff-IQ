import bcrypt from "bcryptjs";
// import your DB connection here
import db from "../../lib/db"; // adjust path as needed

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, otp, newPassword } = req.body;

    // 1. Check user exists
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 2. Verify OTP
    if (user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // 3. Hash new password
    const hashed = await bcrypt.hash(newPassword, 10);

    // 4. Update password & clear OTP
    await db.user.update({
      where: { email },
      data: { password: hashed, otp: null },
    });

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
