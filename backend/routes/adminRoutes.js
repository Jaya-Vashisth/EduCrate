import express from "express";
import { login, signUp } from "../controllers/AdminController.js";
import {
  deleteCourse,
  postCourse,
  courses,
  updateCourse,
} from "../controllers/courseController.js";
const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/course", postCourse);
router.get("/course", courses);
router.patch("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export const adminRoutes = router;
