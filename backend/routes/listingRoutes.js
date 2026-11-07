import express from "express";
import {
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete,
} from "../controllers/listingController.js";

const router = express.Router();

router.get("/", handleGetAll);
router.get("/:id", handleGetOne);
router.post("/", handleCreate);
router.put("/:id", handleUpdate);
router.delete("/:id", handleDelete);

export default router;
