import express from "express";
import UsersController from "../controllers/UsersController";
import { validator } from "../middlewares/validator.js";
import usersSchema from "../schemas/usersSchema.js";

const router = express.Router();

router.post('/login', validator(usersSchema.login), UsersController.login);

router.get('/', UsersController.getUsers);
router.post('/create', validator(usersSchema.create), UsersController.createUser);
router.post('/update', validator(usersSchema.update), UsersController.updateUser);
router.delete('/delete/:id', validator(usersSchema.delete, 'params'), UsersController.deleteUser);

export default router;
