import Router from "express";
import { scrapData } from "../controllers/scrap.controller.js";

const router = Router();
router.post("/scrape", scrapData);

export default router;
