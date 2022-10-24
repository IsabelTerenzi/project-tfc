import { Request, Response } from 'express';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private matchService = new MatchService()) { }

  public getMatchProgress = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    let matches;

    if (!inProgress) {
      matches = await this.matchService.getMatches();
    } else {
      const InProgressOnQuery = inProgress === 'true';
      matches = await this.matchService.getDoneMatches(InProgressOnQuery);
    }
    return res.status(200).json(matches);
  };
}

export default MatchController;
