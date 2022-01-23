import {Beverage} from './beverage.abstract';

export class DeCaffeine extends Beverage {
  constructor() {
    super();
    this.description = '디카페인 커피';
  }

  cost(): number {
    return 1.05;
  }
}
