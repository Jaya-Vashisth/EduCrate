import { jwt } from "jsonwebtoken";
import User from "../models/userModel";

export const auth = async (req, res, next) => {
  const userId = req.params;

  const decoded = await jwt.verify({ id: userId }, process.env.SECRET_KEY);

  const user = await User.findById(userId);

  if (decoded.id === user._id) {
    req.user = user;
    next();
  } else
    res.json({
      success: false,
      message: "forbidden route",
    });
};
