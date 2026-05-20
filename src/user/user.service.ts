import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto.js';
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
    const userList = users.map((user) => new ListUserDto(user));

    return userList;
  }

  async createUser(userData: CreateUserDto) {
    const user = new User(userData);
    return await this.userRepository.save(user);
  }

  async updateUser(id: string, userData: Partial<User>) {
    await this.userRepository.update(id, userData);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }

  async emailExists(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return !!user;
  }
}
