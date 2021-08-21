import {FlyBehavior} from './fly-behavior.interface';

export class FlyRocketPoweredImpl implements FlyBehavior {
  fly(): void {
    console.log('로켓 추진 장치를 이용하여 비행합니다 🚀🚀🚀');
  }
}
