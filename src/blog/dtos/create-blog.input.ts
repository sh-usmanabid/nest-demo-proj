import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BlogInput {
    @Field()
    id: number;

    @Field()
    userId: number;

    @Field()
    title: string;

    @Field()
    body: string;

    @Field()
    date: string;
}