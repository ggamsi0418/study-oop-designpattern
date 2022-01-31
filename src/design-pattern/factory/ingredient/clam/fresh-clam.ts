import {IClam} from '.';

export class FreshClam implements IClam {
  name = 'FreshClam';

  constructor() {
    console.log(`Use Clam -> ${this.name}`);
  }
}
