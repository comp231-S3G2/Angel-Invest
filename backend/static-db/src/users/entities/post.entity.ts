import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  moneyGoal: number;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ type: 'timestamp', nullable: false })
  dateGoal: Date;
}
