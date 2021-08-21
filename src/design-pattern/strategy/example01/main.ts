import {FlyRocketPoweredImpl} from './behaviors/fly/fly-rocket-powered';
import {MallardDuck} from './ducks/mallard-duck';
import {ModelDuck} from './ducks/model-duck';

class MiniDuckSimulator {
  static main() {
    console.log('---------------------------------');

    const mallard = new MallardDuck();
    mallard.display();
    mallard.performQuack();
    mallard.performFly();

    console.log('---------------------------------');

    const model = new ModelDuck();
    model.display();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPoweredImpl());
    model.performFly();

    console.log('---------------------------------');
  }
}

MiniDuckSimulator.main();
