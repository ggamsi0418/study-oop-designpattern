import {GumballMachine} from './gumball-machine';
import {IState} from './state.interface';

export class WinnerState implements IState {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log('잠깐만 기다려 주세요. 알맹이가 나가고 있습니다.');
  }

  ejectQuarter(): void {
    console.log('이미 알맹이를 뽑으셨습니다.');
  }

  turnCrank(): void {
    console.log('손잡이는 한 번만 돌려주세요.');
  }

  dispense(): void {
    console.log('축하드립니다! 알맹이를 하나 더 받으실 수 있습니다.');
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('더 이상 알맹이가 없습니다.');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}
