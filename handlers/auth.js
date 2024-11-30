import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        name: "we need name",
        email: "we need email",
        password: "we need password",
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiry: Date.now() + 24 * 60 * 60 * 1000,
    });

    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      message: "User created successfully",
      user: {
        success: true,
        message: "User created successfully",
        user: {
          ...user._doc,
          password: undefined,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  res.status(200).json({ message: "Login is Comming Soon" });
};

export const logout = async (req, res) => {
  res.status(200).json({ message: "Logout is Comming Soon" });
};
