import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository.js';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  createUser(@Body() userData: string) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  listUsers() {
    return this.userRepository.list();
  }
}
