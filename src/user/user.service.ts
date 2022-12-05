import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './dtos/create-user.input'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['comments', 'blogs']});
    }

    async createUser(userInput: UserInput): Promise<User> {
        const newUser = this.userRepository.create(userInput);
        return this.userRepository.save(newUser);
    }
}
