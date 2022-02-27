import {TurkeyAdapter} from './turkey.adapter';
import {MallardDuck} from './duck/mallard-duck';
import {WildRTurkey} from './turkey/wild-turkey';
import {IDuck} from './duck/duck.interface';

class DuckTestDrive {
  static main(): void {
    const duck = new MallardDuck();

    const turkey = new WildRTurkey();
    // Turkey는 TurkeyAdapter로 감싸서 Duck처럼 보이도록 만든다.
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log('The Turkey says...'); // Turkey 자체를 테스트
    turkey.gobble();
    turkey.fly();

    console.log('\nThe Duck says...'); // Duck 객체를 전달해서 테스트
    this.testDuck(duck);

    console.log('\nThe TurkeyAdapter says...');
    this.testDuck(turkeyAdapter); // 중요: 오리 대신 칠면조를 넘겨본다
  }

  static testDuck(duck: IDuck) {
    duck.quack();
    duck.fly();
  }
}

DuckTestDrive.main();
