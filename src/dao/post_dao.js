import prisma from "../config/prismaClient.js";

class PostDao {

    getAll = async () => {
        try {
            return await prisma.post.findMany();
        } catch (error) {
            throw new Error(error);
        }
    }

    getById = async (id) => {
        try {
            return await prisma.post.findUnique({ where: { id } });
        } catch (error) {
            throw new Error(error);
        }
    }

    getByName = async (name) => {
        try {
            return await prisma.post.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: "insensitive"
                    }
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    create = async (body) => {
        try {
            return await prisma.post.create({ data: body });
        } catch (error) {
            throw new Error(error);
        }
    }

    update = async (id, body) => {
        try {
            return await prisma.post.update({
                where: { id },
                data: body,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    delete = async (id) => {
        try {
            return await prisma.post.delete({ where: { id } });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default new PostDao();