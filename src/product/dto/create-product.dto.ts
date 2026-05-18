import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateProductCharacteristicDto } from './create-product-characteristic.dto.js';
import { CreateProductImageDto } from './create-product-image.dto.js';

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductCharacteristicDto)
  readonly characteristics!: CreateProductCharacteristicDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductImageDto)
  readonly images!: CreateProductImageDto[];
}
