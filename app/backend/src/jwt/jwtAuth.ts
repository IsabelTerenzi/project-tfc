import * as jwt from 'jsonwebtoken';
import { SignOptions, JwtPayload } from 'jsonwebtoken';
import { User } from '../interfaces/login';

const jwtConfig = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

export const createToken = (user: User): string => {
  const token = jwt.sign({ id: user.id, role: user.role }, 'jwt_secret', jwtConfig as SignOptions);
  return token;
};

export const authToken = (token: string): JwtPayload => {
  const tok = jwt.verify(token, 'jwt_secret');
  return tok as JwtPayload;
};
