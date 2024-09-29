import express from "express";
import { login, signUp, userProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", login);
router.post("/sign", signUp);
router.get("/:id", userProfile);

export default router;
