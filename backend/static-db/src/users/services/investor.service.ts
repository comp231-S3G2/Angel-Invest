import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestorRepository } from '../repositories/investor.repository';
import { JwtService } from '@nestjs/jwt';
import { CreateInvestorAccountDTO } from '../dtos/investor/create.dto';

@Injectable()
export class InvestorService {
  private logger = new Logger('[USER-SERVICE]');
  constructor(
    @InjectRepository(InvestorRepository)
    private readonly investorRepository: InvestorRepository,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @param CreateInvestorAccountDTO
   */
  async createInvestorAccount(
    signUpData: CreateInvestorAccountDTO,
  ): Promise<any> {
    try {
      const { email } = signUpData;

      const token = await this.jwtService.signAsync({
        email,
      });

      const account = await this.investorRepository.createAccount(
        signUpData,
        token,
      );

      return account;
    } catch (err) {
      return new HttpException(err.message, err.code);
    }
  }
}
