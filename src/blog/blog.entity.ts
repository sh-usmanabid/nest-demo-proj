import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from '../comment/comment.entity'

@Entity()
@ObjectType()
export class Blog {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    body: string;

    @Column()
    @Field()
    author: string;

    @OneToMany(() => Comment, (comment: Comment) => comment.blog)
    public comments: Comment[];

    @Column()
    @Field()
    date: string;
}