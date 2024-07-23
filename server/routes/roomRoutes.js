import express from "express";
const router = express.Router();

import { addRoom, findRoom } from "../controllers/roomControllers.js";

router.get("/findRoom/:id", findRoom);
router.post("/addRoom", addRoom);

export default router;
