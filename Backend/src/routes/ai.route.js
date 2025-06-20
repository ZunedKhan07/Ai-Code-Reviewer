import { Router } from "express";
import { getResponse } from "../controllers/ai.controller.js";

const router = Router();

router.post('/get-response', getResponse )

export default router;