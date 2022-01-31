import {IVeggie} from '.';

export class RedPepper implements IVeggie {
  name = 'RedPepper';

  constructor() {
    console.log(`Use Veggie -> ${this.name}`);
  }
}
