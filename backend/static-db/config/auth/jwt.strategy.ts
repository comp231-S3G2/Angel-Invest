import { JwtPayload } from './jwt.payload';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as config from 'config';
import { InvestorRepository } from '../../src/users/repositories/investor.repository';

const jwtConstants = config.get('jwt_secret');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(InvestorRepository)
    private investorRepository: InvestorRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  // Update when creating the business entity
  async validate(payload: JwtPayload): Promise<any> {
    const { email } = payload;
    const user = await this.investorRepository.findOne({ email });

    if (user) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
