import express from "express";
import { signup, login, logout } from "../handlers/auth.js";

const router = express.Router();

// signup route
router.get("/signup", signup);

// login route
router.get("/login", login);

// logout route
router.get("/logout", logout);

export default router;
