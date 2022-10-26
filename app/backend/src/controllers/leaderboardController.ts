import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public getAllLeaderboards = async (req: Request, res: Response) => {
    const allLeaderboards = await this.leaderboardService.getAllLeaderboards();
    return res.status(200).json(allLeaderboards);
  };
}

export default LeaderboardController;
