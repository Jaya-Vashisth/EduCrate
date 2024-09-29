import mongoose, { mongo } from "mongoose";
import Course from "./courseModel.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: Number,
    min: 3,
    max: 10,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  coursesId: [
    {
      type: mongoose.Types.ObjectId,
      ref: Course,
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
