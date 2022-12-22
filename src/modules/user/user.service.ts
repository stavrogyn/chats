import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RepositoryType } from 'src/entities';

@Injectable()
export class UserService {
  constructor(
    @Inject(RepositoryType.User)
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
