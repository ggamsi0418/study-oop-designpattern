import {Pizza} from '../menu';

export abstract class PizzaStore {
  orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}
