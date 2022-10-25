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

  public createMatch = async (infos: Match): Promise<Match> => {
    const match = await Matches.create({ ...infos, inProgress: true });
    return match;
  };

  public finishMatch = async (id: string) => {
    const matchFinished = await Matches.update({ inProgress: false }, { where: { id } });
    return matchFinished;
  };

  public updateMatch = async (id: string, homeTeam: number, awayTeam: number) => {
    const matchUpdated = await Matches
      .update({ homeTeamGoals: homeTeam, awayTeamGoals: awayTeam }, { where: { id } });
    return matchUpdated;
  };
}

export default MatchService;
