import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { ListUserDto } from './dto/list-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './user.entity.js';
import { UserRepository } from './user.repository.js';

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

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    const user = this.userRepository.update(id, userData);
    return user;
  }
}
