import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Unique(['nickname', 'email'])
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 30 })
  nickname: string;

  @Column('text')
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  email: string;

  @Column('date')
  createdAt: Date;

  @Column('date')
  lastVisitAt: Date;
}
