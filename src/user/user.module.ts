import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserRepository } from './user.repository.js';
import { UniqueEmailValidator } from './validator/unique-email.validator.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity.js';
import { UserService } from './user.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator, UserService],
})
export class UserModule {}
