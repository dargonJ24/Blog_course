import NewsController from "../app/controllers/NewController.js";
import express from "express";
const newsController = new NewsController();
const newsRouter = express.Router();

newsRouter.get('/', newsController.index);

export default newsRouter;