import { User } from '../user.entity.js';

export class ListUserDto {
  readonly id: string;
  readonly name: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
  }
}
