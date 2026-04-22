import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  listProducts() {
    return this.productRepository.list();
  }
}
