import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchModel';
import getLeaderboard from '../middlewares/leaderboardCalculations';
import Leaderboard from '../interfaces/leaderboard';

class LeaderboardService {
  public modelTeams: Teams;
  public modelMatches: Matches;

  constructor() {
    this.modelTeams = new Teams();
    this.modelMatches = new Matches();
  }

  private sort = (leaderboard: Leaderboard[]): Leaderboard[] => {
    const sortLeaderboad = leaderboard.sort((x, y) =>
      y.totalPoints - x.totalPoints
     || y.totalVictories - x.totalVictories
     || y.goalsBalance - x.goalsBalance
     || y.goalsFavor - x.goalsFavor
     || x.goalsOwn - y.goalsOwn);
    return sortLeaderboad;
  };

  public getAllLeaderboards = async (): Promise<Leaderboard[]> => {
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({ where: { inProgress: false } });

    const leaderboard = teams.map((team) => ({
      name: team.teamName,
      ...getLeaderboard(matches, team.id),
    }));

    const sortedLeaderboard = this.sort(leaderboard);
    return sortedLeaderboard;
  };

  public getHomeLeaderboards = async (): Promise<Leaderboard[]> => {
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({ where: { inProgress: false } });

    const leaderboardHome = teams.map((team) => {
      const leaderboard = matches.filter((match) => match.homeTeam === team.id);
      return { name: team.teamName, ...getLeaderboard(leaderboard, team.id) };
    });

    const sortedLeaderboard = this.sort(leaderboardHome);
    return sortedLeaderboard;
  };

  public getAwayLeaderboards = async (): Promise<Leaderboard[]> => {
    const teams = await Teams.findAll();
    const matches = await Matches.findAll({ where: { inProgress: false } });

    const leaderboardAway = teams.map((team) => {
      const leaderboard = matches.filter((match) => match.awayTeam === team.id);
      return { name: team.teamName, ...getLeaderboard(leaderboard, team.id) };
    });

    const sortedLeaderboard = this.sort(leaderboardAway);
    return sortedLeaderboard;
  };
}

export default LeaderboardService;
