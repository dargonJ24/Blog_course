import SiteController from "../app/controllers/SiteController.js";
import express from "express";
const siteController = new SiteController();
const SiteRouter = express.Router();
SiteRouter.get('/:slug', siteController.search);
SiteRouter.get('/', siteController.index);

export default SiteRouter;