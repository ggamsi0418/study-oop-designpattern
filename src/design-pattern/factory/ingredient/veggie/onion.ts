import {IVeggie} from '.';

export class Onion implements IVeggie {
  name = 'Onion';

  constructor() {
    console.log(`Use Veggie -> ${this.name}`);
  }
}
