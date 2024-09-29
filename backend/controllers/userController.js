import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const SECRET_KEY = process.env.SECRET_KEY || "jwtsecurity";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1D" });
};

//login
export const login = async (req, res) => {};

//signup route
export const signUp = async (req, res) => {
  const { name, email, password, role } = req.body();

  try {
    //check if user exist
    let user = await User.find({ email: email });
    if (user)
      res.status(400).json({
        success: false,
        message: "user already exist",
      });

    //hash the password
    const hashPassword = await bcrypt.hash(password, 5);

    //create user
    user = await User.create({ name, email, password: hashPassword, role });

    //generate token
    const token = generateToken(user._id);

    //send to client
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export const purchase = async (req, res) => {};

export const courses = async (req, res) => {};

export const purchasedCourses = async (req, res) => {};

export const userProfile = async (req, res) => {};
