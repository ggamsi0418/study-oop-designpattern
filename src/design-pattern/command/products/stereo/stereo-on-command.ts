import {Command} from '../command.interface';
import {Stereo} from './stereo';

export class StereoOnCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
  }

  getName() {
    return this.stereo.getName() + '.' + StereoOnCommand.name;
  }
}
