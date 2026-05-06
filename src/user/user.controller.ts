import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { ListUserDto } from './dto/list-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './user.entity.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    const user = new User(userData);
    await this.userService.createUser(user);
    return new ListUserDto(user.id, user.name);
  }

  @Get()
  listUsers() {
    return this.userService.listUsers();
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return await this.userService.updateUser(id, userData);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
