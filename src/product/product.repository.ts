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

  update(id: string, productData: Partial<Product>) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Product not found.');
    }

    Object.assign(product, productData);
    return product;
  }
}
