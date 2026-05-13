import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListProductDto } from './dto/list-product.dto.js';
import { Product } from './product.entity.js';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async listProducts() {
    const products = await this.productRepository.find();
    return products.map(
      (product) =>
        new ListProductDto(
          product.id,
          product.name,
          product.price,
          product.availableItems,
          product.description,
          product.category,
        ),
    );
  }

  async createProduct(product: Product) {
    await this.productRepository.save(product);
  }

  async updateProduct(id: string, productData: Partial<Product>) {
    await this.productRepository.update(id, productData);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
