import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository.js';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  validate(value: string): boolean {
    const emailExists = this.userRepository.existingEmail(value);
    return !emailExists;
  }
}

export function UniqueEmail(validationOptions: ValidationOptions) {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
}
