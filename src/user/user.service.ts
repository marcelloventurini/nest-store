import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListUserDto } from './dto/list-user.dto.js';
import { User } from './user.entity.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async listUsers() {
    const users = await this.userRepository.find();
    const userList = users.map((user) => new ListUserDto(user.id, user.name));

    return userList;
  }

  async createUser(userData: User) {
    await this.userRepository.save(userData);
  }

  async updateUser(id: string, userData: Partial<User>) {
    await this.userRepository.update(id, userData);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
