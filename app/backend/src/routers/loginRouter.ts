import { Router } from 'express';
import UserController from '../controllers/userController';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', userController.userLogin);

export default loginRouter;
