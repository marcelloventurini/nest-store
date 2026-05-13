import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsUUID(undefined, { message: 'Invalid user ID format' })
  @IsNotEmpty({ message: 'User ID is required' })
  readonly userId!: string;

  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsNumber()
  readonly price!: number;

  @IsNumber()
  readonly availableItems!: number;

  @IsString()
  readonly description!: string;

  @IsString()
  readonly category!: string;
}
