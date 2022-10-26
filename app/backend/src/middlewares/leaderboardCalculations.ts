import Match from '../interfaces/match';

const getTotalGames = (match: Match[], id: number) => {
  const totalGames = match.reduce((acc, cur) => {
    if (cur.homeTeam === id || cur.awayTeam === id) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return totalGames;
};

const getTotalVictories = (match: Match[], id: number) => {
  const victories = match.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals > cur.awayTeamGoals) {
      return acc + 1;
    }
    if (cur.awayTeam === id && cur.awayTeamGoals > cur.homeTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return victories;
};

const getTotalDraws = (match: Match[], id: number) => {
  const draws = match.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals === cur.awayTeamGoals) {
      return acc + 1;
    }
    if (cur.awayTeam === id && cur.awayTeamGoals === cur.homeTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return draws;
};

const getTotalLosses = (match: Match[], id: number) => {
  const losses = match.reduce((acc, cur) => {
    if (cur.homeTeam === id && cur.homeTeamGoals < cur.awayTeamGoals) {
      return acc + 1;
    }
    if (cur.awayTeam === id && cur.awayTeamGoals < cur.homeTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return losses;
};

const getGoalsFavor = (match: Match[], id: number) => {
  const goalsFavor = match.reduce((acc, cur) => {
    if (cur.homeTeam === id) {
      return acc + cur.homeTeamGoals;
    }
    if (cur.awayTeam === id) {
      return acc + cur.awayTeamGoals;
    }
    return acc;
  }, 0);
  return goalsFavor;
};

const getGoalsOwn = (match: Match[], id: number) => {
  const goalsOwn = match.reduce((acc, cur) => {
    if (cur.homeTeam === id) {
      return acc + cur.awayTeamGoals;
    }
    if (cur.awayTeam === id) {
      return acc + cur.homeTeamGoals;
    }
    return acc;
  }, 0);
  return goalsOwn;
};

const getEfficiency = (match: Match[], id: number) => {
  const victories = getTotalVictories(match, id);
  const draws = getTotalDraws(match, id);
  const points = victories * 3 + draws * 1;
  const games = getTotalGames(match, id);

  const efficiency = (points / (games * 3)) * 100;
  return efficiency.toFixed(2);
};

const getLeaderboard = (match: Match[], id: number) => {
  const totalGames = getTotalGames(match, id);
  const totalVictories = getTotalVictories(match, id);
  const totalDraws = getTotalDraws(match, id);
  const totalLosses = getTotalLosses(match, id);
  const goalsFavor = getGoalsFavor(match, id);
  const goalsOwn = getGoalsOwn(match, id);
  const efficiency = getEfficiency(match, id);

  return ({
    totalPoints: totalVictories * 3 + totalDraws * 1,
    totalGames,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency,
  });
};

export default getLeaderboard;
