import { Router } from 'express';
import UserController from '../controllers/userController';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', userController.userLogin);
loginRouter.get('/validate', userController.getUser);

export default loginRouter;
