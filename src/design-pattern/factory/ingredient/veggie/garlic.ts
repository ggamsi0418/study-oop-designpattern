import {IVeggie} from '.';

export class Garlic implements IVeggie {
  name = 'Garlic';

  constructor() {
    console.log(`Use Veggie -> ${this.name}`);
  }
}
