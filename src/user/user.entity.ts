import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  date: string;
}