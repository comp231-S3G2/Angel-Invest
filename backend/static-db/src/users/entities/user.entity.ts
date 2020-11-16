import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  TableInheritance,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { Logger } from '@nestjs/common';
import { jwtConstants } from '../../../config/auth/jwt.secret';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

@Entity('User')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true, nullable: false })
  phoneNumber: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false })
  password: string;

  @Column()
  accountType: string;

  @Column({ nullable: true })
  stripeId: string;

  @Column()
  salt: string;

  // Encrypts the password with salt for security purposes.
  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
  get token() {
    const { email } = this;
    return jwt.sign(
      {
        email,
      },
      jwtConstants.secret,
      { expiresIn: '1d' },
    );
  }
  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      if (this.password[0] === '$') {
        // tslint:disable-next-line: no-console
        Logger.warn(
          `Skipping password encryption. -- Password Already Encrypted -- .`,
        );
      } else {
        this.password = await bcrypt.hash(this.password, 10);
      }
    }
  }
}
