import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../config/auth/jwt.secret';

export const RolesGuard = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const token = request.cookies.__pid__;

    if (token) {
      try {
        const verifyToken = jwt.verify(token, jwtConstants.secret);
        if (!verifyToken) {
          throw new UnauthorizedException('Error to validate user account.');
        }

        return verifyToken;
      } catch (err) {
        return new HttpException('Permission denied', 401);
      }
    } else {
      return new HttpException('Permission denied', 401);
    }
  },
);
