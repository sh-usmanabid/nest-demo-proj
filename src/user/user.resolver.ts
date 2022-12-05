import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserInput } from './dtos/create-user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((type) => [User])
  async getAllUsers() {
    return this.userService.getAll();
  }

  @Mutation((returns) => User)
  createUser(@Args('userInput') userInput: UserInput): Promise<User> {
    return this.userService.createUser(userInput);
  }
}
