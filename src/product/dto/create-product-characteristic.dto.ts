import { IsNotEmpty } from 'class-validator';

export class CreateProductCharacteristicDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  description!: string;
}
