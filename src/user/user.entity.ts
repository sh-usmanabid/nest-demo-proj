import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Blog } from '../blog/blog.entity'
import { Comment } from '../comment/comment.entity'

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

  @OneToMany(() => Comment, (comment: Comment) => comment.author)
  public comments: Comment[];

  @OneToMany(() => Blog, (blog: Blog) => blog.author)
  public blogs: Blog[];

  @Column()
  @Field()
  date: string;
}