import express from "express";
import { signup, login, logout } from "../handlers/auth.js";

const router = express.Router();

// signup route
router.post("/signup", signup);

// login route
router.post("/login", login);

// logout route
router.post("/logout", logout);

export default router;
