import {Product} from '../product.interface';

export class GarageDoor implements Product {
  private name: string;

  constructor(position: string) {
    this.name = 'GarageDoor';
  }

  getName() {
    return this.name;
  }

  up(): void {
    console.log('GarageDoor is up');
  }
  down(): void {
    console.log('GarageDoor is down');
  }
  stop(): void {
    console.log('GarageDoor is stop');
  }
  lightOn(): void {
    console.log('GarageDoor is lightOn');
  }
  lightOff(): void {
    console.log('GarageDoor is lightOff');
  }
}
