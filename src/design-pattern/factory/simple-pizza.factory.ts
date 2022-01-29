import {Pizza} from './pizza.interface';

export class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}
