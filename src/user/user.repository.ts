import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users: string[] = [];

  save(user: string) {
    this.users.push(user);
  }

  list() {
    return this.users;
  }
}
