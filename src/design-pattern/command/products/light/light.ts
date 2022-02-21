import {Product} from '../product.interface';

export class Light implements Product {
  private name: string;

  constructor(position: string) {
    this.name = `${position} Light`;
  }

  getName() {
    return this.name;
  }

  on(): void {
    console.log(`${this.name} is On`);
  }

  off(): void {
    console.log(`${this.name} is Off`);
  }
}
