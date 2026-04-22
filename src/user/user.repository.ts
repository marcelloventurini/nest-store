import { Injectable } from '@nestjs/common';
import { User } from './user.entity.js';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  save(user: User) {
    this.users.push(user);
  }

  list() {
    return this.users;
  }

  existingEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user !== undefined;
  }
}
