import {IDough} from '.';

export class ThickCrustDough implements IDough {
  name = 'ThickCrustDough';

  constructor() {
    console.log(`Use Dough -> ${this.name}`);
  }
}
