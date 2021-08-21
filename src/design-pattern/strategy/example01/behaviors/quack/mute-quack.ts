import {QuackBehavior} from './quack-behavior.interface';

export class MuteQuackImpl implements QuackBehavior {
  quack(): void {
    console.log('(침묵....😷)');
  }
}
