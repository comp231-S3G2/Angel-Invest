import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { InvestorEntity } from './investor.entity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: 0 })
  moneyGoal?: number;

  @Column({ nullable: true, default: 0 })
  amountMoneyEqualsEquity?: number;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ type: 'timestamp', nullable: true, default: new Date() })
  dateGoal?: Date;

  @Column({ nullable: true, type: 'simple-array' })
  investors: InvestorEntity[];

  @ManyToOne(type => User, user => user.posts)
  author: User;
}
