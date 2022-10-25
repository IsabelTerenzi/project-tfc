import { Request, Response } from 'express';
import { authToken } from '../jwt/jwtAuth';
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

  public createMatch = async (req: Request, res: Response) => {
    const match = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'User unauthorized' });
    }

    try {
      const payload = authToken(authorization);
      req.headers.id = payload.id;
      const newMatch = await this.matchService.createMatch(match);
      return res.status(201).json(newMatch);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchService.finishMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchController;
