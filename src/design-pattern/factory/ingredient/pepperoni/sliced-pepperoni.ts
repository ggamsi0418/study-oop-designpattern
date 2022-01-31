import {IPepperoni} from '.';

export class SlicedPepperoni implements IPepperoni {
  name = 'SlicedPepperoni';

  constructor() {
    console.log(`Use Pepperoni -> ${this.name}`);
  }
}
