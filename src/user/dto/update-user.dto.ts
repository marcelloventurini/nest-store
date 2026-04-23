import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UniqueEmail } from '../validator/unique-email.validator.js';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name!: string;

  @IsEmail()
  @UniqueEmail({ message: 'Email already registered' })
  @IsOptional()
  readonly email!: string;

  @MinLength(6)
  @IsOptional()
  readonly password!: string;
}
