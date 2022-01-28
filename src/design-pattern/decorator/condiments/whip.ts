import {CondimentDecorator} from '.';
import {Beverage} from '../beverages';

export class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, 휘핑 크림`;
  }

  cost(): number {
    return 0.1 + this.beverage.cost();
  }
}
