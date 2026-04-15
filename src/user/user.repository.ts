export class UserRepository {
  private users: any[] = [];

  save(user) {
    this.users.push(user);
  }

  list() {
    return this.users;
  }
}
