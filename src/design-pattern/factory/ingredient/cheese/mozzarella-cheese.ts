import {ICheese} from '.';

export class MozzarellaCheese implements ICheese {
  name = 'MozzarellaCheese';

  constructor() {
    console.log(`Use Cheese -> ${this.name}`);
  }
}
