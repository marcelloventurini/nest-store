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
import { ProductCharacteristic } from './product-characteristic.entity.js';
import { ProductImage } from './product-image.entity.js';
import { Product } from './product.entity.js';
import { ProductService } from './product.service.js';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    const { characteristics, images, ...basicProductData } = productData;
    const product = new Product(basicProductData);

    product.characteristics = characteristics.map(
      (c) => new ProductCharacteristic(c),
    );
    product.images = images.map((img) => new ProductImage(img));

    const savedProduct = await this.productService.createProduct(product);
    return new ListProductDto(savedProduct);
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
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
    return { message: 'Product deleted successfully' };
  }
}
