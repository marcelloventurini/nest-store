import { Product } from '../product.entity.js';
import { ListProductCharacteristicDto } from './list-product-characteristic.dto.js';
import { ListProductImageDto } from './list-product-image.dto.js';

export class ListProductDto {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly availableItems: number;
  readonly description: string;
  readonly category: string;
  readonly characteristics: ListProductCharacteristicDto[];
  readonly images: ListProductImageDto[];

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.price = Number(product.price);
    this.availableItems = product.availableItems;
    this.description = product.description;
    this.category = product.category;
    this.characteristics = product.characteristics.map(
      (c) => new ListProductCharacteristicDto(c.id, c.name, c.description),
    );
    this.images = product.images.map(
      (img) => new ListProductImageDto(img.id, img.url, img.description),
    );
  }
}
