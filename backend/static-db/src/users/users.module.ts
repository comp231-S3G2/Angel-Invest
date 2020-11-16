import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import * as config from 'config';
import { InvestorEntity } from './entities/investor.entity';
import { InvestorRepository } from './repositories/investor.repository';
import { InvestorController } from './controllers/investor.controller';
import { InvestorService } from './services/investor.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'config/auth/jwt.strategy';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
const jwtConstants = config.get('jwt_secret');

@Module({
  imports: [
    TypeOrmModule.forFeature([InvestorEntity, InvestorRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [InvestorController, UserController],
  providers: [JwtStrategy, InvestorService, UserService],
  exports: [JwtStrategy, PassportModule],
})
export class UserModule {}
