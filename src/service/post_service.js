import PostDao from "../dao/post_dao.js";
import CustomError from "../utils/custom_error.js"

class PostService {
    constructor(dao) {
        this.dao = dao
    }

    getAllPosts = async () => {
        try {
            return await this.dao.getAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    getPostById = async (id) => {
        try {
            const response = await this.dao.getById(id);
            if (!response) throw new CustomError("Post no encontrado", 404);
            return response
        } catch (error) {
            throw error;
        }
    }

    createPost = async (body) => {
        try {
            const response = await this.dao.create(body);
            if (!response) throw new CustomError("Error al crear Post", 500);
            return response;
        } catch (error) {
            throw error;
        }
    }

    updatePost = async (id, body) => {
        try {
            const response = await this.dao.update(id, body);
            if (!response) throw new CustomError("Post no encontrado", 404);
            return response;
        } catch (error) {
            throw error
        }
    }

    deletePost = async (id) => {
        try {
            const response = await this.dao.delete(id);
            if (!response) throw new CustomError("Post no encontrado", 404);
            return response;
        } catch (error) {
            throw error
        }
    }
}

export const postService = new PostService(PostDao);