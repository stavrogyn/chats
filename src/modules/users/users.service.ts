import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { RepositoryType } from 'src/entities';

@Injectable()
export class UsersService {
  constructor(
    @Inject(RepositoryType.Users)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return this.userRepository.save({ ...user, id });
  }
}
