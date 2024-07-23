import express from "express";
const router = express.Router();

import { addRoom, findRoom } from "../controllers/roomControllers.js";

router.post("/addRoom", addRoom);
router.get("/findRoom/:id", findRoom);

export default router;
