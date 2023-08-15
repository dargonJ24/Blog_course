import MeController from "../app/controllers/MeController.js";
import express from "express";
const meController = new MeController();
const meRouter = express.Router();
meRouter.get('/courses/store', meController.storeCourse);
meRouter.get('/',meController.index)
export default meRouter;