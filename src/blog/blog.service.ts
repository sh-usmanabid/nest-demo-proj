import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { BlogInput } from './dtos/create-blog.input';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) {}

    async getAll(): Promise<Blog[]> {
        const blogs = await this.blogRepository.find({ relations: { author: true, comments: true } });
        console.log(blogs);
        return blogs;
    }

    async createBlog(blogInput: BlogInput): Promise<Blog> {
        const newBlog = this.blogRepository.create(blogInput);
        return this.blogRepository.save(newBlog);
    }
}
