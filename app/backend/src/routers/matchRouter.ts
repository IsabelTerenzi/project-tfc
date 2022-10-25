import { Router } from 'express';
import authValidation from '../middlewares/matchValidation';
import MatchController from '../controllers/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', matchController.getMatchProgress);
matchRouter.post('/', authValidation, matchController.createMatch);
matchRouter.patch('/:id/finish', matchController.finishMatch);
matchRouter.patch('/:id', matchController.updateMatch);

export default matchRouter;
