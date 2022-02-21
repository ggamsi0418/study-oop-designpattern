import {Command} from '../command.interface';
import {Light} from './light';

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }

  getName() {
    return this.light.getName() + '.' + LightOnCommand.name;
  }
}
