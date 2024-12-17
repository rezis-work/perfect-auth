import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../handlers/auth.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// check auth route
router.get("/check-auth", verifyToken, checkAuth);

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
