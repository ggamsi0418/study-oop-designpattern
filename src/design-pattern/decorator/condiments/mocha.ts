import {CondimentDecorator} from '.';
import {Beverage} from '../beverages';

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, 모카`;
  }

  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}
