import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../handlers/auth.js";

const router = express.Router();

// signup route
router.post("/signup", signup);

// login route
router.post("/login", login);

// logout route
router.post("/logout", logout);

// verify user route
router.post("/verify-email", verifyEmail);

// forget password route
router.post("/forgot-password", forgotPassword);

// reset password route
router.post("/reset-password/:token", resetPassword);

export default router;
