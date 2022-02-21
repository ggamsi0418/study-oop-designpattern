import {NoCommand} from './products/no-command';
import {Command} from './products/command.interface';

export class RemoteControl {
  // 해당 리모컨은 일곱 개의 ON, OFF 명령을 처리
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command;

  constructor() {
    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands.push(noCommand);
      this.offCommands.push(noCommand);
    }

    this.undoCommand = noCommand;
  }

  // 슬롯 번호와 그 슬롯에 저장할 ON 및 OFF 명령을 인자로 전달 받는다.
  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();

    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();

    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand.undo();
  }

  toString(): string {
    let stringBuffer: string;

    stringBuffer = '\n----- Remote Control -----\n';

    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuffer += `[slot ${i}] ${this.onCommands[
        i
      ].getName()} || ${this.offCommands[i].getName()}\n`;
    }

    stringBuffer += `[undo] ${this.undoCommand.getName()}\n`;

    return stringBuffer;
  }
}
