import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Blog } from '../blog/blog.entity'

@Entity()
@ObjectType()
export class Comment {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    body: string;

    @Column()
    @Field()
    author: string;

    @ManyToOne(() => Blog, (blog: Blog) => blog.comments)
    public blog: Blog[];

    @Column()
    @Field()
    date: string;
}