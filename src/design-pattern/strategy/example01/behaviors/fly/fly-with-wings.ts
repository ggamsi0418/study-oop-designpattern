import {FlyBehavior} from './fly-behavior.interface';

export class FlyWithWingsImpl implements FlyBehavior {
  fly(): void {
    console.log('날개를 이용하여 비행합니다 🦸‍♂️');
  }
}
