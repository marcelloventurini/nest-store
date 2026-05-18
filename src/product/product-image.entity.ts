import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity.js';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'url', length: 255, nullable: false })
  url!: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description!: string;

  @ManyToOne(() => Product, (product) => product.images, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product!: Product;

  constructor(partial: Partial<ProductImage>) {
    Object.assign(this, partial);
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
