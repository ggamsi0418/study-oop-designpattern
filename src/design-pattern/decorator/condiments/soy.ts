import {CondimentDecorator} from '.';
import {Beverage} from '../beverages';

export class Soy extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, 두유`;
  }

  cost(): number {
    return 0.15 + this.beverage.cost();
  }
}
