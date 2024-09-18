import { Router } from "express";
import { getTeams } from "../controllers/teamController";

const router = Router();

router.get("/all", getTeams);

export default router;
