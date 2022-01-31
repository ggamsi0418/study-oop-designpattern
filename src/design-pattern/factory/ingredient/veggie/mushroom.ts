import {IVeggie} from '.';

export class Mushroom implements IVeggie {
  name = 'Mushroom';

  constructor() {
    console.log(`Use Veggie -> ${this.name}`);
  }
}
