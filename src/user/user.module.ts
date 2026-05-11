import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller.js';
import { User } from './user.entity.js';
import { UserService } from './user.service.js';
import { UniqueEmailValidator } from './validator/unique-email.validator.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UniqueEmailValidator, UserService],
})
export class UserModule {}
