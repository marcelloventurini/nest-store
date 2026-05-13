export class ListProductDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
    readonly availableItems: number,
    readonly description: string,
    readonly category: string,
  ) {}
}
