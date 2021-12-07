import { Router } from "express";
import rssfeedController from "../controller/rssfeedController"
import asyncWrapper from "../../utils/asynWrapper"

const router = Router();

router.get("/", asyncWrapper(rssfeedController.parseFeed));

export default router;