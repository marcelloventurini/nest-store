import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository.js';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  createProduct(@Body() productData: string) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  listProducts() {
    return this.productRepository.list();
  }
}
