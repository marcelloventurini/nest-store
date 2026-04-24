import { Injectable } from '@nestjs/common';
import { Product } from './product.entity.js';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  save(product: Product) {
    this.products.push(product);
  }

  list() {
    return this.products;
  }
}
