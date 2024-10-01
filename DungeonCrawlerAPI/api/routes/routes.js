import { Router } from "express";
import { getAllItems, getItemById } from "../controllers/ItemController.js";
import { getAllRooms, getRoomById } from "../controllers/RoomController.js";

const router = Router();

router.get('/Item', getAllItems )
router.get('/Item/:id', getItemById )

router.get('/Room', getAllRooms )
router.get('/Room/:id', getRoomById )

export default router;