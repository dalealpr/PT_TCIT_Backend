import express from "express"
import 'dotenv/config'
import dotenv from "dotenv";
import cors from "cors"
import prisma from "./config/prismaClient.js";
import { logger } from "./middlewares/logger.js";
import { apiRouter } from "./routes/api_router.js";

dotenv.config();

const app = express()

// --------  CORS -------- //
app.use(
  cors({
    origin: "http://localhost:5173", // Origen del Front
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    // Middleware que muestra las respuestas en consola
    .use(logger)
    // Routes
    .use("/api/v1", apiRouter.getRouter());


const PORT = process.env.PORT || 8080;

// --------  Metodo iniciar Server -------- //
async function startServer() {
    try {
        await prisma.$connect();
        console.log("\n✅ Conectado a la BD PostgreSQL🐘");

        app.listen(PORT, () =>
            console.log(`✅ Servidor andando en el puerto ${PORT}🌎 \n`)
        );
    } catch (error) {
        console.error("❌ Error al conectar a la base de datos:", error);
        process.exit(1);
    }
}

startServer();