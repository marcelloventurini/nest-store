import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products: string[] = [];

  save(product: string) {
    this.products.push(product);
  }

  list() {
    return this.products;
  }
}
