import {Pizza, PizzaStore} from '..';
import {NYStyleCheesePizza} from './menu';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NYStyleCheesePizza();
    } else {
      return null;
    }
  }
}
