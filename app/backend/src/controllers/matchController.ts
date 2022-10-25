import { Request, Response } from 'express';
import MatchService from '../services/matchService';
import TeamService from '../services/teamService';

class MatchController {
  constructor(
    private matchService = new MatchService(),
    private teamService = new TeamService(),
  ) { }

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

    const homeTeamExists = await this.teamService.getById(match.homeTeam);
    const awayTeamExists = await this.teamService.getById(match.awayTeam);

    if (!homeTeamExists || !awayTeamExists) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const newMatch = await this.matchService.createMatch(match);

    if (newMatch.homeTeam === newMatch.awayTeam) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    return res.status(201).json(newMatch);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchService.finishMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchService.updateMatch(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  };
}

export default MatchController;
