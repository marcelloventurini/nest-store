import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserRepository } from './user.repository.js';
import { UniqueEmailValidator } from './validator/unique-email.validator.js';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator],
})
export class UserModule {}
