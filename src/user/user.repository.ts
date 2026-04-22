import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UserRepository {
  private users: CreateUserDto[] = [];

  save(user: CreateUserDto) {
    this.users.push(user);
  }

  list() {
    return this.users;
  }
}
