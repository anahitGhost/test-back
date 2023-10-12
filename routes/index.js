import express from "express";
import appInfo from './appInfo'
import users from './users'
import products from './products'

const router = express.Router();

router.use('/', appInfo);
router.use('/users', users);
router.use('/products', products);
export default router;

