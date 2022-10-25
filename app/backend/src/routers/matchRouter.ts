import { Router } from 'express';
import MatchController from '../controllers/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', matchController.getMatchProgress);
matchRouter.post('/', matchController.createMatch);
matchRouter.patch('/:id/finish', matchController.finishMatch);

export default matchRouter;
