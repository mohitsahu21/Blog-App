import express from "express";
import {
 
    deletePost,
    getPost,
  getPosts
 
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id",getPost);
router.post("/", );
router.delete("/:id",deletePost );
router.put("/:id", );

export default router;