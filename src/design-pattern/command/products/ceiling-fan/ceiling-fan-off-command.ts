import {CeilingFan} from './ceiling-fan';
import {Command} from '../command.interface';

export class CeilingFanOffCommand implements Command {
  prevSpeed: number;

  constructor(private ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  undo(): void {
    if (this.prevSpeed === this.ceilingFan.HIGH) {
      this.ceilingFan.high();
    } else if (this.prevSpeed === this.ceilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === this.ceilingFan.LOW) {
      this.ceilingFan.low();
    } else if (this.prevSpeed === this.ceilingFan.OFF) {
      this.ceilingFan.off();
    }
  }

  getName() {
    return this.ceilingFan.getName() + '.' + CeilingFanOffCommand.name;
  }
}
