import { Router } from "express";
import { postController } from "../controllers/post_controller.js";

const router = Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router