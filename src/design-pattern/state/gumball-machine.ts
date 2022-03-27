import {HasQuarterState} from './has-quarter-state';
import {NoQuarterState} from './no-quarter-state';
import {SoldOutState} from './sold-out-state';
import {SoldState} from './sold-state';
import {IState} from './state.interface';
import {WinnerState} from './winner-state';

export class GumballMachine {
  private soldOutState: IState;
  private noQuarterState: IState;
  private hasQuarterState: IState;
  private soldState: IState;
  private winnerState: IState;

  private state: IState;
  private count = 0;

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldOutState = new SoldOutState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.state = this.soldOutState;
    this.count = numberGumballs;

    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    }
  }

  toString(): string {
    return `
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  주식회사 왕뽑기
  Typescript로 돌아가는 2022년형 뽑기 기계
  남은 개수: ${this.getCount()}
  현재 상태: ${
    this.state === this.soldOutState
      ? '매진'
      : this.state === this.noQuarterState
      ? '동전 투입 대기중'
      : '에러'
  }
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
`;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  releaseBall() {
    console.log('공이 슬롯 밖으로 굴러 나갑니다.');

    if (this.count !== 0) {
      this.count -= 1;
    }
  }

  setState(state: IState) {
    this.state = state;
  }

  getCount() {
    return this.count;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getSoldState() {
    return this.soldState;
  }

  getSoldOutState() {
    return this.soldOutState;
  }

  getWinnerState() {
    return this.winnerState;
  }
}
