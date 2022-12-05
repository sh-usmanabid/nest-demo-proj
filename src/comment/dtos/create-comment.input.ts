import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentInput {
    @Field()
    id: number;

    @Field()
    body: string;

    @Field()
    author: string;

    @Field()
    date: string;
}