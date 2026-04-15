import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository.js';

@Controller('/users')
export class UserController {
  private userRepository: UserRepository = new UserRepository();

  @Post()
  createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  listUsers() {
    return this.userRepository.list();
  }
}
