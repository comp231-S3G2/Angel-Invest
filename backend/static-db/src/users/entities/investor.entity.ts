import { Entity, Column, BaseEntity, ChildEntity } from 'typeorm';
import { User } from './user.entity';

@ChildEntity('investor')
export class InvestorEntity extends User {
  @Column({ type: 'simple-array' })
  investedList: string[];

  @Column({ type: 'simple-array' })
  bookmarkedPosts: string[];

  @Column({ default: true })
  isNew: boolean;

  @Column({ default: false })
  hasBusinessAccount: boolean;
}
