import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductCharacteristic } from './product-characteristic.entity.js';
import { ProductImage } from './product-image.entity.js';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'user_id', length: 100, nullable: false })
  userId!: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name!: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'price',
    nullable: false,
  })
  price!: number;

  @Column({ name: 'available_items', nullable: false })
  availableItems!: number;

  @Column({ name: 'description', length: 255, nullable: false })
  description!: string;

  @Column({ name: 'category', length: 100, nullable: false })
  category!: string;

  @OneToMany(
    () => ProductCharacteristic,
    (productCharacteristic) => productCharacteristic.product,
    { cascade: true, eager: true },
  )
  characteristics!: ProductCharacteristic[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images!: ProductImage[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt!: string;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
