import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductRepository } from './product.repository.js';

@Module({ controllers: [ProductController], providers: [ProductRepository] })
export class ProductModule {}
