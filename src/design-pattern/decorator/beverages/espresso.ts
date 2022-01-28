import {Beverage} from './beverage.abstract';

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = '에스프레소';
  }

  cost(): number {
    return 1.99;
  }
}
