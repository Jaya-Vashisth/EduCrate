import express from "express";

import {
  course,
  courses,
  deleteCourse,
  postCourse,
  purchase,
  updateCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.route("/").get(courses);
router.route("/:id").get(course);
router.post("/purchase", purchase);

export const courseRoutes = router;
