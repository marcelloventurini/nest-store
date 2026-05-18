import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity.js';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async listProducts() {
    return await this.productRepository.find({
      relations: {
        characteristics: true,
        images: true,
      },
    });
  }

  async createProduct(product: Product) {
    return await this.productRepository.save(product);
  }

  async updateProduct(id: string, productData: Partial<Product>) {
    await this.productRepository.update(id, productData);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
