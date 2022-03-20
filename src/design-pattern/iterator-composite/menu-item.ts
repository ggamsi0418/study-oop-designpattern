import {MenuComponent} from './menu-component.abstract';

export class MenuItem extends MenuComponent {
  constructor(
    private name: string,
    private description: string,
    private vegetarian: boolean,
    private price: number
  ) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  print(): void {
    console.log(
      ` ${this.getName()} ${
        this.isVegetarian() ? '(v)' : ''
      }, ${this.getPrice()}`
    );
    console.log(`   -> ${this.getDescription()}`);
  }
}
