import {Command} from '../command.interface';
import {Light} from './light';

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }

  getName() {
    return this.light.getName() + '.' + LightOffCommand.name;
  }
}
