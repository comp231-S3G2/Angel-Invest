import { CreateInvestorAccountDTO } from '../../users/dtos/investor/create.dto';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../../users/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  /**
   * @param id
   */
  getAccountById = async (id: string): Promise<any> => {
    try {
      return await this.findOne({
        id,
      });
    } catch (err) {
      return err;
    }
  };
}
