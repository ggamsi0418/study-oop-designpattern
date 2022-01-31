import {IClam} from '.';

export class FrozenClam implements IClam {
  name = 'FrozenClam';

  constructor() {
    console.log(`Use Clam -> ${this.name}`);
  }
}
