import {MacroCommand} from './products/macro-command';
import {Command} from './products/command.interface';
import {StereoOffCommand} from './products/stereo/stereo-off-command';
import {LightOffCommand} from './products/light/light-off-command';
import {StereoOnCommand} from './products/stereo/stereo-on-command';
import {LightOnCommand} from './products/light/light-on-command';
import {Stereo} from './products/stereo/stereo';
import {Light} from './products/light/light';
import {CeilingFanOffCommand} from './products/ceiling-fan/ceiling-fan-off-command';
import {CeilingFanMediumCommand} from './products/ceiling-fan/ceiling-fan-medium-command';
import {CeilingFanHighCommand} from './products/ceiling-fan/celing-fan-high-command';
import {CeilingFan} from './products/ceiling-fan/ceiling-fan';
import {RemoteControl} from './remote-control';

// 커맨드 패턴에서 클라이언트에 해당
class RemoteLoader {
  static main() {
    // 인보커
    const remote = new RemoteControl();

    // 리시버
    // 각 장치들을 설치
    const ceilingFan = new CeilingFan('Living Room');
    const light = new Light('Living Room');
    const stereo = new Stereo('');

    // 커맨드
    const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
    const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);
    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);
    const stereoOnCommand = new StereoOnCommand(stereo);
    const stereoOffCommand = new StereoOffCommand(stereo);

    // 매크로 명령어 생성
    const macroOn: Command[] = [
      ceilingFanMediumCommand,
      lightOnCommand,
      stereoOnCommand,
    ];

    const macroOff: Command[] = [
      ceilingFanOffCommand,
      lightOffCommand,
      stereoOffCommand,
    ];

    const macroOnCommand = new MacroCommand(macroOn);
    const macroOffCommand = new MacroCommand(macroOff);

    // 각 슬롯에 커맨드 할당
    remote.setCommand(0, macroOnCommand, macroOffCommand);

    // 각 슬롯의 ON/OFF 동작
    console.log(remote.toString()); // 각 슬롯에 대한 정보 출력
    console.log('---Pushing Macro On---');
    remote.onButtonWasPressed(0);
    console.log('---Pushing Macro Off---');
    remote.offButtonWasPressed(0);
  }
}

RemoteLoader.main();
