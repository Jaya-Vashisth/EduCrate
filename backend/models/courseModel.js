import mongoose, { Mongoose } from "mongoose";
import Admin from "./adminModel.js";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
  },

  createrId: {
    type: mongoose.Types.ObjectId,
    ref: Admin,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
