import {FlyNoWayImpl} from '../behaviors/fly/fly-no-way';
import {QuackImpl} from '../behaviors/quack/quack';
import {Duck} from './duck.abstract';

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWayImpl(), new QuackImpl());
  }

  public display() {
    console.log('저는 장난감 오리입니다 🤖');
  }
}
