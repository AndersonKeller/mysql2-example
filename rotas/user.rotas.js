import { Router } from "express";
import { createUserController } from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.post("", createUserController);
