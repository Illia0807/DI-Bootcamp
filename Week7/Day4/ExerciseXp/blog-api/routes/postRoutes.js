import express from "express";
import * as postsController from "../controllers/postsController.js";

const router = express.Router();

router.get("/posts", postsController.getAllPosts);
router.get("/posts/:id", postsController.getPostById);
router.post("/posts", postsController.createPost);
router.put("/posts/:id", postsController.updatePost);
router.delete("/posts/:id", postsController.deletePost);

export default router;
