import express from "express";
import { getAllUserController ,getUserController,updateUserController,deleteUserController,changePasswordController} from "../controllers/user.controller.js";
import { authToken } from "../middlewares/auth.middleware.js";
import { updateMid } from "../middlewares/user.middleware.js";
import { userUpdateSchema } from "../schemas/user.schema.js";
const router = express.Router();



router.get("/",[authToken],getAllUserController)
 
router.get("/:id",[authToken],getUserController )

router.put("/:id",[authToken,updateMid(userUpdateSchema)],updateUserController)

router.delete("/:id",[authToken],deleteUserController )

router.put("/forget-password/:id",[authToken,updateMid(userUpdateSchema)],changePasswordController)


export default router;