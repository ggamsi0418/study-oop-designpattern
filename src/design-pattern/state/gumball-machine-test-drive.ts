import {GumballMachine} from './gumball-machine';

class GumballMachineTestDrive {
  static main(): void {
    // 처음에 알맹이 5개를 넣고 시작
    const gumballMachine = new GumballMachine(5);

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());
  }
}

GumballMachineTestDrive.main();
