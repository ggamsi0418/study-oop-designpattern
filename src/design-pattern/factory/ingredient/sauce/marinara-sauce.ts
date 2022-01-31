import {ISauce} from '.';

export class MarinaraSauce implements ISauce {
  name = 'MarinaraSauce';

  constructor() {
    console.log(`Use Sauce -> ${this.name}`);
  }
}
