import { Controller, Post, Body, Get } from '@nestjs/common';
import { InvestorService } from '../services/investor.service';
import { CreateInvestorAccountDTO } from '../dtos/investor/create.dto';

@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  /**
   * @INVESTOR_SIGN_UP
   */
  @Post('/signup')
  async createAccount(@Body() signupData: CreateInvestorAccountDTO) {
    return this.investorService.createInvestorAccount(signupData);
  }
}
