import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'user_id', length: 100, nullable: false })
  userId!: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name!: string;

  @Column({ name: 'price', nullable: false })
  price!: number;

  @Column({ name: 'available_items', nullable: false })
  availableItems!: number;

  @Column({ name: 'description', length: 255, nullable: false })
  description!: string;

  @Column({ name: 'category', length: 100, nullable: false })
  category!: string;

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
