import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductRepository {
  private products: CreateProductDto[] = [];

  save(product: CreateProductDto) {
    this.products.push(product);
  }

  list() {
    return this.products;
  }
}
