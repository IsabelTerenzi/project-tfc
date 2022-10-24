import Users from '../database/models/UserModel';
import Login, { User } from '../interfaces/login';
import { authToken } from '../jwt/jwtAuth';

class UserService {
  public model: Users;

  constructor() {
    this.model = new Users();
  }

  public userLogin = async ({ email }: Login): Promise<User | null> => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };

  public getUser = (token: string) => {
    const authJwt = authToken(token);
    return authJwt.role;
  };
}

export default UserService;
