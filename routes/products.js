import express from "express";
import ProductsController from "../controllers/ProductsController.js";

const router = express.Router();

router.get('/', ProductsController.getProducts);
router.get('/get-categories', ProductsController.getCategories);
router.post('/create', ProductsController.createProduct);

export default router;
