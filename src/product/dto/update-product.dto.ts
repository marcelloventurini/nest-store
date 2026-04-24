import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name!: string;

  @IsNumber()
  @IsOptional()
  readonly price!: number;

  @IsNumber()
  @IsOptional()
  readonly availableItems!: number;
}
