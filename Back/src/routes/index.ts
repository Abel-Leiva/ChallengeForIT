import { Router } from "express";
import { createTask, deleteTask, getById, getTasks, updateTask } from "../controllers/tasksController";
const router: Router = Router();

router.get("/", getTasks)
router.post("/", createTask)
router.get("/:id", getById)

router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

export default router