import {Product} from '../product.interface';

export class Stereo implements Product {
  private name: string;

  constructor(position: string) {
    this.name = `Stereo ${position ? `in ${position}` : ''}`;
  }

  getName() {
    return this.name;
  }

  on(): void {
    console.log('Stereo is On');
  }

  off(): void {
    console.log('Stereo is Off');
  }

  setCd(): void {
    console.log('Stereo set CD');
  }

  setDvd(): void {
    console.log('Stereo set DVD');
  }

  setRadio(): void {
    console.log('Stereo set Radio');
  }

  setVolume(level: number): void {
    console.log(`Stereo set Volume(${level})`);
  }
}
