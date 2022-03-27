import {GumballMachine} from './gumball-machine';
import {IState} from './state.interface';

export class SoldOutState implements IState {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log('현재 매진이므로, 동전을 넣을 수 없습니다.');
  }

  ejectQuarter(): void {
    console.log('아직 동전을 넣지 않았으므로 반환이 안됩니다.');
  }

  turnCrank(): void {
    console.log('손잡이를 돌려도, 알맹이는 나오지 않습니다.');
  }

  dispense(): void {
    console.log('내보낼 알맹이가 더이상 없습니다.');
  }
}
