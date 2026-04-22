import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UniqueEmail } from '../validator/unique-email.validator.js';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;
  @IsEmail()
  @UniqueEmail({ message: 'Email already registered' })
  readonly email!: string;
  @MinLength(6)
  readonly password!: string;
}
