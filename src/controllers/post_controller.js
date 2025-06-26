import { postService } from "../service/post_service.js";
import { createResponse } from "../utils/response.js"

class PostController {
    constructor(service) {
        this.service = service
    }

    getAllPosts = async (req, res, next) => {
        try {
            const data = await this.service.getAllPosts()
            createResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }

    getPostById = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await this.service.getPostById(id);
            createResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }

    createPost = async (req, res, next) => {
        try {
            const data = await this.service.createPost(req.body);
            createResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }

    updatePost = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await this.service.updatePost(id, req.body);
            createResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }

    deletePost = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await this.service.deletePost(id);
            createResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
}

export const postController = new PostController(postService);