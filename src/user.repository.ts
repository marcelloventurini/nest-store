export class UserRepository {
  private users: any[] = [];

  save(user) {
    this.users.push(user);
    console.log(this.users);
  }
}
