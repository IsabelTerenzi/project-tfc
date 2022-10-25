import { Request, Response, NextFunction } from 'express';
import { authToken } from '../jwt/jwtAuth';

const authValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'User unauthorized' });
  }

  try {
    const payload = authToken(authorization);
    req.headers.id = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authValidation;
