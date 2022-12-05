import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from '../comment/comment.entity';
import { User } from '../user/user.entity'

@Entity()
@ObjectType()
export class Blog {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    userId: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    body: string;

    @OneToMany(() => Comment, (comment: Comment) => comment.blog)
    public comments: Comment[];

    @ManyToOne(() => User, (user: User) => user.comments)
    @JoinColumn({ name: "userId" })
    public author: User[];

    @Column()
    @Field()
    date: string;
}