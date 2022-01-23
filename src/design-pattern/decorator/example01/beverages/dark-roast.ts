import {Beverage} from './beverage.abstract';

export class DarkRoast extends Beverage {
  constructor() {
    super();

    this.description = '다크 로스트 커피';
  }

  cost(): number {
    return 0.99;
  }
}
