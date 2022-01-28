import {Beverage} from './beverage.abstract';

export class HouseBlend extends Beverage {
  constructor() {
    super();

    this.description = '하우스 블렌드 커피';
  }

  cost(): number {
    return 0.89;
  }
}
