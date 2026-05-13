import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { ListProductDto } from './dto/list-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './product.entity.js';
import { ProductRepository } from './product.repository.js';
import { ProductService } from './product.service.js';

@Controller('/products')
export class ProductController {
  constructor(
    private productRepository: ProductRepository,
    private productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    const product = new Product(productData);
    await this.productService.createProduct(product);
    return new ListProductDto(
      product.id,
      product.name,
      product.price,
      product.availableItems,
      product.description,
      product.category,
    );
  }

  @Get()
  async listProducts() {
    return await this.productService.listProducts();
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: UpdateProductDto,
  ) {
    return await this.productService.updateProduct(id, productData);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    this.productRepository.delete(id);
    return { message: 'Product deleted successfully' };
  }
}
