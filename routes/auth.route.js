import { register,login } from "../controllers/auth.controller.js";
import { registerMid,loginMid } from "../middlewares/auth.middleware.js";
import express from "express";
import { registerSchema,loginSchema } from "../schemas/auth.schema.js";


const router = express.Router();

router.post("/register",[registerMid(registerSchema)],register);
router.post("/login",[loginMid(loginSchema)],login);


export default router;