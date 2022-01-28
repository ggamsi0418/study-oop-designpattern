import {QuackBehavior} from './quack-behavior.interface';

export class QuackImpl implements QuackBehavior {
  quack(): void {
    console.log('꽥꽥 🦆');
  }
}
