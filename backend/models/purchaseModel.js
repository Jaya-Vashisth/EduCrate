import mongoose from "mongoose";
import Course from "./courseModel.js";
import User from "./userModel.js";

const purchaseSchema = new mongoose.Schema({
  courseId: [
    {
      type: mongoose.Types.ObjectId,
      ref: Course,
    },
  ],
  userId: [
    {
      type: mongoose.Types.ObjectId,
      ref: User,
    },
  ],
});

export const Purchase = mongoose.model("Purchase", purchaseSchema);
