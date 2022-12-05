import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
    @Field()
    id: number;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    email: string;

    @Field()
    date: string;
}