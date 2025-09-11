import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async getUser(id: number): Promise<User> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new Error(`User with ${id} not found`);
    return user;
  }

  async create(data: Partial<User>) {
    const user = this.userRepo.create(data);
    return this.userRepo.save(user);
  }

  async delete(id: number): Promise<void> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new Error(`User with ${id} not found`);
    await this.userRepo.delete({ id });
  }
}
