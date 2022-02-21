import {GarageDoor} from './garage-door';
import {Command} from '../command.interface';

export class GarageDoorCloseCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }

  getName() {
    return this.garageDoor.getName() + '.' + GarageDoorCloseCommand.name;
  }
}
