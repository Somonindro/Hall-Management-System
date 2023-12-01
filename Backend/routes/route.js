import express from "express";
import { authRouter } from "../src/Authorization/auth";
import { signupRouter } from "../src/Authorization/signup";

const router = express.Router();

router.use("/reg-std", authRouter);
router.use("/reg-std-signup", signupRouter);
