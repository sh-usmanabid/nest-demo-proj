import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Blog } from '../blog/blog.entity'
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class Comment {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    userId: number;

    @Column()
    @Field()
    blogId: number;

    @Column()
    @Field()
    body: string;

    @ManyToOne(() => User, (user: User) => user.comments)
    @JoinColumn({ name: "userId" })
    public author: User[];

    @ManyToOne(() => Blog, (blog: Blog) => blog.comments)
    @JoinColumn({ name: "blogId" })
    public blog: Blog[];

    @Column()
    @Field()
    date: string;
}