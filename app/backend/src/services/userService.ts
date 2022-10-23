import Users from '../database/models/UserModel';
import Login from '../interfaces/login';

class UserService {
  public model: Users;

  constructor() {
    this.model = new Users();
  }

  public userLogin = async ({ email, password }: Login) => {
    const user = await Users.findOne({ where: { email, password } });
    return user;
  };
}

export default UserService;
