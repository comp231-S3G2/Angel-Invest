import { CreateInvestorAccountDTO } from '../../users/dtos/investor/create.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { InvestorEntity } from '../../users/entities/investor.entity';

@EntityRepository(User)
export class InvestorRepository extends Repository<InvestorEntity> {
  constructor() {
    super();
  }

  /**
   * @param CreateInvestorAccountDTO
   */
  createAccount = async (
    accountDto: CreateInvestorAccountDTO,
    token: string,
  ): Promise<any> => {
    const { password } = accountDto;

    const account = new InvestorEntity();

    account.salt = await bcrypt.genSalt();
    account.password = await this.hashedPassword(password, account.salt);
    try {
      return await this.save({
        ...accountDto,
        token,
        salt: account.salt,
        password: account.password,
      });
    } catch (err) {
      return err;
    }
  };

  /**
   * @param LoginCredentials
   * Find account of the user when logging in
   */
  async validateAccountPassword(authCredentialsDto: any): Promise<User | null> {
    const { email, password } = authCredentialsDto;
    const user = await this.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      return user;
    } else {
      return null;
    }
  }

  /**
   *
   * @param password
   * @param salt
   * this will hash the password that user inputs
   */
  private async hashedPassword(
    password: string,
    salt: string,
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
