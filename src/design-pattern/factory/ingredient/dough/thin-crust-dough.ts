import {IDough} from '.';

export class ThinCrustDough implements IDough {
  name = 'ThinCrustDough';

  constructor() {
    console.log(`Use Dough -> ${this.name}`);
  }
}
