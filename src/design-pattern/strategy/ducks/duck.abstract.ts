import {FlyBehavior} from '../behaviors/fly/fly-behavior.interface';
import {QuackBehavior} from '../behaviors/quack/quack-behavior.interface';

export abstract class Duck {
  constructor(
    private flyBehavior: FlyBehavior,
    private quackBehavior: QuackBehavior
  ) {}

  abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(fb: FlyBehavior): void {
    console.log('비행 방법 동적 변경 !!');
    this.flyBehavior = fb;
  }

  public setQuackBehavior(fb: QuackBehavior): void {
    console.log('울음 소리 동적 변경 !!');
    this.quackBehavior = fb;
  }
}
