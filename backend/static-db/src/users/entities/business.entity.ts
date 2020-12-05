import {
  Entity,
  Column,
  BaseEntity,
  ChildEntity,
  TableInheritance,
} from 'typeorm';
import { User } from './user.entity';

@Entity('business')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class BusinessEntity extends User {
  @Column({ type: 'text' })
  businessName: string;

  @Column({ type: 'text' })
  businessDescription: string;

  @Column({ nullable: true, default: 0 })
  equityLeft: number;

  @Column({ type: 'text' })
  businessTypes: string;

  @Column({ type: 'simple-array' })
  bookmarkedPosts: string[];

  @Column({ default: false })
  hasInvestorAccount: boolean;
}
