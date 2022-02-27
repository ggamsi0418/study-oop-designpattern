import {IDuck} from './duck.interface';
export class MallardDuck implements IDuck {
  quack(): void {
    console.log('Quack');
  }

  fly(): void {
    console.log("I'm flying");
  }
}
