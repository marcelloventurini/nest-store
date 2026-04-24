export class Product {
  id!: string;
  name!: string;
  price!: number;
  availableItems!: number;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
