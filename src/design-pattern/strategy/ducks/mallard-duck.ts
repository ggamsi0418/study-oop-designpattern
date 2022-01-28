import {FlyWithWingsImpl} from '../behaviors/fly/fly-with-wings';
import {QuackImpl} from '../behaviors/quack/quack';
import {Duck} from './duck.abstract';

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWingsImpl(), new QuackImpl());
  }

  public display() {
    console.log('저는 물오리입니다 🦆🦆🦆');
  }
}
