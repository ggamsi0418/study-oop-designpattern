import {Pizza} from './pizza.interface';
import {SimplePizzaFactory} from './simple-pizza.factory';

export abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}
