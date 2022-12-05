import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentInput } from './dtos/create-comment.input'

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {}

    async getAll(): Promise<Comment[]> {
        const comments = await this.commentRepository.find({ relations: { author: true, blog: true }});
        console.log(comments);
        return comments;
    }

    async createComment(commentInput: CommentInput): Promise<Comment> {
        const newComment = this.commentRepository.create(commentInput);
        return this.commentRepository.save(newComment);
    }
}
