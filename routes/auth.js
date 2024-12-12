import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
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

// reset password route
router.post("/forgot-password", forgotPassword);

export default router;
