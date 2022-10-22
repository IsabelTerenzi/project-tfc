import { Request, Response } from 'express';
import Login from '../interfaces/login';
import UserService from '../services/userService';
import { createToken } from '../jwt/jwtAuth';

class UserController {
  constructor(private userService = new UserService()) { }

  public userLogin = async (req: Request, res: Response) => {
    const login: Login = req.body;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const user = await this.userService.userLogin(login);

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = createToken(login);

    res.status(200).json({ token });
  };
}

export default UserController;
