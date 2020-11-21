import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestorRepository } from '../repositories/investor.repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  private logger = new Logger('[USER-SERVICE]');
  constructor(
    @InjectRepository(InvestorRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async getAccountById(id: string): Promise<User | HttpException> {
    try {
      const account = await this.userRepository.findOne(id);
      return account;
    } catch (err) {
      return new HttpException(err.message, err.code);
    }
  }
}
