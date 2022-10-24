import Team from '../interfaces/team';
import Teams from '../database/models/TeamModel';

class TeamService {
  public model: Teams;

  constructor() {
    this.model = new Teams();
  }

  public getTeams = async (): Promise<Team[]> => {
    const teams = await Teams.findAll();
    return teams;
  };

  public getById = async (id: string): Promise<Team | null > => {
    const team = await Teams.findOne({ where: { id } });
    return team;
  };
}

export default TeamService;
