import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { Product } from './product.entity.js';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    const product = new Product(productData);
    this.productRepository.save(product);
    return productData;
  }

  @Get()
  listProducts() {
    return this.productRepository.list();
  }
}
