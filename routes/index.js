import express from "express";
import appInfo from './appInfo'
import users from './users'

const router = express.Router();

router.use('/', appInfo);
router.use('/users', users);
export default router;

