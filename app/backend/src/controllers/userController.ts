import { Request, Response } from 'express';
import * as bcryptjs from 'bcryptjs';
// import Login from '../interfaces/login';
import UserService from '../services/userService';
import { createToken } from '../jwt/jwtAuth';

class UserController {
  constructor(private userService = new UserService()) { }

  public userLogin = async (req: Request, res: Response) => {
    const login = req.body;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const user = await this.userService.userLogin(login);

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordValid = await bcryptjs.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = createToken(user);

    res.status(200).json({ token });
  };

  public getUser = async (req:Request, res: Response) => {
    const { authorization } = req.headers;

    const role = this.userService.getUser(authorization as string);

    return res.status(200).json({ role });
  };
}

export default UserController;
