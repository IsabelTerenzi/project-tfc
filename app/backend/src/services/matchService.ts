import Match from '../interfaces/match';
import Matches from '../database/models/MatchModel';
import Teams from '../database/models/TeamModel';

class MatchService {
  public model: Matches;

  constructor() {
    this.model = new Matches();
  }

  public getMatches = async (): Promise<Match[]> => {
    const matches = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  public getDoneMatches = async (inProgress: boolean): Promise<Match[]> => {
    const doneMatches = await Matches.findAll({ where: { inProgress },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return doneMatches;
  };
}

export default MatchService;
