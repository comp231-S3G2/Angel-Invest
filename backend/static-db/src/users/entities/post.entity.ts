import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  moneyGoal: number;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  dateGoal: Date;

  @ManyToOne(type => User, user => user.posts)
  author: User;
}
