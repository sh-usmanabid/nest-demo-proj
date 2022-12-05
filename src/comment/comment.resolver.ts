import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentInput } from './dtos/create-comment.input';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((type) => [Comment])
  async getAllComments() {
    return this.commentService.getAll();
  }

  @Mutation((returns) => Comment)
  createComment(@Args('commentInput') commentInput: CommentInput): Promise<Comment> {
    return this.commentService.createComment(commentInput);
  }
}
