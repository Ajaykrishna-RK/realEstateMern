import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";

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
