import { IsNotEmpty } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  url!: string;

  @IsNotEmpty()
  description!: string;
}
