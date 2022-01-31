import {ICheese} from '.';

export class ReggianoCheese implements ICheese {
  name = 'ReggianoCheese';

  constructor() {
    console.log(`Use Cheese -> ${this.name}`);
  }
}
