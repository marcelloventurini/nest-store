import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity.js';
import { ListUserDto } from './dto/list-user.dto.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async listUsers() {
    const users = await this.userRepository.find();
    const userList = users.map((user) => {
      new ListUserDto(user.id, user.name);
    });

    return userList;
  }
}
