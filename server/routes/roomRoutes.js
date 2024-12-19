import express from "express";
const router = express.Router();

import { isLoggedIn } from "../middleware/isLoggedIn.js";

import { addRoom, findRoom } from "../controllers/roomControllers.js";

router.get("/findRoom/:id", isLoggedIn, findRoom);
router.post("/addRoom", addRoom);

export default router;
