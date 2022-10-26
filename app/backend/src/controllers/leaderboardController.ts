import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public getAllLeaderboards = async (req: Request, res: Response) => {
    const allLeaderboards = await this.leaderboardService.getAllLeaderboards();
    return res.status(200).json(allLeaderboards);
  };

  public getHomeLeaderboards = async (req: Request, res: Response) => {
    const homeLeaderboards = await this.leaderboardService.getHomeLeaderboards();
    return res.status(200).json(homeLeaderboards);
  };

  public getAwayLeaderboards = async (req: Request, res: Response) => {
    const awayLeaderboards = await this.leaderboardService.getAwayLeaderboards();
    return res.status(200).json(awayLeaderboards);
  };
}

export default LeaderboardController;
