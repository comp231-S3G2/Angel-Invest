import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InvestorService } from '../services/investor.service';
import { CreateInvestorAccountDTO } from '../dtos/investor/create.dto';
import { GetUser } from '../../shared/user.decorator';
import { User } from '../entities/user.entity';

@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  /**
   * @GET_INVESTOR_ACCOUNT_INFO
   */
  @Get(':id')
  async getAccountInfo(@Param('id') id: string): Promise<any> {
    return this.investorService.getAccountInfo(id);
  }

  /**
   * @INVESTOR_SIGN_UP
   */
  @Post('/signup')
  async createAccount(@Body() signupData: CreateInvestorAccountDTO) {
    return this.investorService.createInvestorAccount(signupData);
  }
}
