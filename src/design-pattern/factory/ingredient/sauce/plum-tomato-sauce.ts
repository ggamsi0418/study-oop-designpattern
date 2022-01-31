import {ISauce} from '.';

export class PlumTomatoSauce implements ISauce {
  name = 'PlumTomatoSauce';

  constructor() {
    console.log(`Use Sauce -> ${this.name}`);
  }
}
