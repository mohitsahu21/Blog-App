import express from "express";
import {
 
  getPosts
 
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", );
router.post("/", );
router.delete("/:id", );
router.put("/:id", );

export default router;