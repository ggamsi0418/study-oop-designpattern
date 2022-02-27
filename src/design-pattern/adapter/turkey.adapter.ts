import {IDuck} from './duck/duck.interface';
import {ITurkey} from './turkey/turkey.interface';

export class TurkeyAdapter implements IDuck {
  constructor(private turkey: ITurkey) {}

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
