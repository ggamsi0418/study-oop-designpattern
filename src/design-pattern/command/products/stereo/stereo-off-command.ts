import {Command} from '../command.interface';
import {Stereo} from './stereo';

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  getName() {
    return this.stereo.getName() + '.' + StereoOffCommand.name;
  }
}
