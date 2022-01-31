import {PizzaStore} from '..';
import {ChicagoStyleCheesePizza} from './menu';

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string) {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    } else {
      return null;
    }
  }
}
