import CourseController from "../app/controllers/CourseController.js";
import express from "express";
const courseController = new CourseController();
const CourseRouter = express.Router();
CourseRouter.post('/store', courseController.store);
CourseRouter.get('/create', courseController.create);
CourseRouter.get('/:slug', courseController.show);


export default CourseRouter;