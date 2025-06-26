import { Router } from "express";
import postRouter from './post_router.js'

export default class MainRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use("/posts", postRouter); 
  }

  getRouter() {
    return this.router;
  }
}

export const apiRouter = new MainRouter();