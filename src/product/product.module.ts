import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller.js';
import { Product } from './product.entity.js';
import { ProductService } from './product.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
