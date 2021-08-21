import {QuackBehavior} from './quack-behavior.interface';

export class SqueakImpl implements QuackBehavior {
  quack(): void {
    console.log('삑 ✨');
  }
}
