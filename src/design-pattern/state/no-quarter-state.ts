import {GumballMachine} from './gumball-machine';
import {IState} from './state.interface';

export class NoQuarterState implements IState {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log('동전을 넣으셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log('동전을 넣어주세요.');
  }

  turnCrank(): void {
    console.log('동전을 넣어주세요.');
  }

  dispense(): void {
    console.log('동전을 넣어주세요.');
  }
}
