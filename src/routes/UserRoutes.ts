import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/register", userController.register.bind(userController));
router.get("/list", userController.list.bind(userController));
router.delete("/delete", userController.delete.bind(userController));
router.put("/update", userController.update.bind(userController));

export default router;