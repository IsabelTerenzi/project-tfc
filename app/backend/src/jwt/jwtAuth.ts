import * as jwt from 'jsonwebtoken';
import { SignOptions, JwtPayload } from 'jsonwebtoken';
import Login from '../interfaces/login';

const jwtConfig = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

export const createToken = (login: Login): string => {
  const token = jwt.sign(login, 'jwt_secret', jwtConfig as SignOptions);
  return token;
};

export const authToken = (token: string): JwtPayload => {
  const tok = jwt.verify(token, 'jwt_secret');
  return tok as JwtPayload;
};
