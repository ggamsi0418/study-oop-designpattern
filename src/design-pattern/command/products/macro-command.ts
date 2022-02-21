import {Command} from './command.interface';

export class MacroCommand implements Command {
  constructor(private commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    this.commands.forEach(command => command.execute());
  }

  undo(): void {
    this.commands.forEach(command => command.undo());
  }

  getName(): string {
    return `${MacroCommand.name} -> ${this.commands.map(command =>
      command.getName()
    )}`;
  }
}
