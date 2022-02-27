import {ITurkey} from './turkey.interface';

export class WildRTurkey implements ITurkey {
  gobble(): void {
    console.log('Gobble gobble');
  }

  fly(): void {
    console.log("I'm flying a short distance");
  }
}
