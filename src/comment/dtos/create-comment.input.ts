import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentInput {
    @Field()
    id: number;

    @Field()
    userId: number;

    @Field()
    blogId: number;

    @Field()
    body: string;

    @Field()
    date: string;
}