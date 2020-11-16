import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getAccountById(@Param('id') id): Promise<User | HttpException> {
    return this.userService.getAccountById(id);
  }
}
