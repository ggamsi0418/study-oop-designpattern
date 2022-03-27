import {GumballMachine} from './gumball-machine';
import {IState} from './state.interface';

export class HasQuarterState implements IState {
  private winner = 10;
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log('동전은 한 개만 넣어주세요.');
  }

  ejectQuarter(): void {
    console.log('동전이 반환됩니다.');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log('손잡이를 돌리셨습니다.');

    const randNum = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자 추출

    // 숫자 10(당첨)이 나오고, 알맹이가 2개 이상이라면 WinnerState로 전환
    if (randNum === this.winner && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log('알맹이가 나갈 수 없습니다.');
  }
}
