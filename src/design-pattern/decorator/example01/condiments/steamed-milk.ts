import {CondimentDecorator} from '.';
import {Beverage} from '../beverages';

export class SteamedMilk extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, 스팀 밀크`;
  }

  cost(): number {
    return 0.1 + this.beverage.cost();
  }
}
