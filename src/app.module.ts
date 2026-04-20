import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { ProductModule } from './product/product.module.js';

@Module({ imports: [UserModule, ProductModule] })
export class AppModule {}
