import {GarageDoor} from './garage-door';
import {Command} from '../command.interface';

export class GarageDoorOpenCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }

  getName(): string {
    return this.garageDoor.getName() + '.' + GarageDoorOpenCommand.name;
  }
}
