import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/', leaderboardController.getAllLeaderboards);
leaderboardRouter.get('/home', leaderboardController.getHomeLeaderboards);
leaderboardRouter.get('/away', leaderboardController.getAwayLeaderboards);

export default leaderboardRouter;
