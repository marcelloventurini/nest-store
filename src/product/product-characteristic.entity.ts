import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity.js';

@Entity({ name: 'product_characteristics' })
export class ProductCharacteristic {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name!: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description!: string;

  @ManyToOne(() => Product, (product) => product.characteristics, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product!: Product;

  constructor(partial: Partial<ProductCharacteristic>) {
    Object.assign(this, partial);
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
