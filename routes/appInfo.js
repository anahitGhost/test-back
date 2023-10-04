import express from "express";
import ApiInfoController from "../controllers/ApiInfoController";

const router = express.Router();

router.get('/', ApiInfoController.apiInfo);

export default router;
