import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { User } from './user.entity.js';
import { ListUserDto } from './dto/list-user.dto.js';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    const user = new User(userData);
    this.userRepository.save(user);
    return new ListUserDto(user.id, user.name);
  }

  @Get()
  listUsers() {
    const savedUsers = this.userRepository.list();
    return savedUsers.map((user) => new ListUserDto(user.id, user.name));
  }
}
