import { Router } from "express";
import { login, register } from "../controllers/authController";
import { validate } from "../middlewares/validateMiddleware";
import { authSchema } from "../schemas/authSchema";

const router = Router();

router.post("/register", validate(authSchema), register);
router.post("/login", validate(authSchema), login);

export default router;
