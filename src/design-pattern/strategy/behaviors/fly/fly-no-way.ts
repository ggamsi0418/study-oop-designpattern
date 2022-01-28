import {FlyBehavior} from './fly-behavior.interface';

export class FlyNoWayImpl implements FlyBehavior {
  fly(): void {
    console.log('비행을 할 수 없습니다 😭');
  }
}
