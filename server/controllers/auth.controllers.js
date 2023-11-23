import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utilis/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();

    res.status(201).json({ newUser });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser?.password);
    if (!validPassword) return next(errorHandler(404, "Invalid Credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:pass, ...rest  } = validUser._doc
    res.cookie("access_token", token, { httpOnly: true }).status(200).json(rest)
  } catch (err) {
    next(err);
  }
};
