import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';
import { ProductCharacteristic } from './product-characteristic.entity.js';
import { ProductImage } from './product-image.entity.js';
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

  async createProduct(productData: CreateProductDto) {
    const { characteristics, images, ...basicProductData } = productData;
    const product = new Product(basicProductData);

    product.characteristics = characteristics.map(
      (c) => new ProductCharacteristic(c),
    );
    product.images = images.map((img) => new ProductImage(img));

    return await this.productRepository.save(product);
  }

  async updateProduct(id: string, productData: Partial<Product>) {
    await this.productRepository.update(id, productData);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
