import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  moneyGoal: number;
}
