import {Product} from '../product.interface';

export class CeilingFan implements Product {
  private name: string;

  HIGH = 3;
  MEDIUM = 2;
  LOW = 1;
  OFF = 0;
  location: string;
  speed: number;

  constructor(position: string) {
    this.name = `${position} CeilingFan`;
    this.location = position;
    this.speed = this.OFF;
  }

  getName() {
    return this.name;
  }

  high(): void {
    this.speed = this.HIGH;
    console.log('CeilingFan is High');
  }

  medium(): void {
    this.speed = this.MEDIUM;
    console.log('CeilingFan is Medium');
  }

  low(): void {
    this.speed = this.LOW;
    console.log('CeilingFan is Low');
  }

  off(): void {
    this.speed = this.OFF;
    console.log('CeilingFan is Off');
  }

  getSpeed(): number {
    return this.speed;
  }
}
