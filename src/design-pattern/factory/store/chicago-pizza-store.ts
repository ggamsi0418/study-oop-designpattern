import {PizzaStore} from '.';
import {
  ChicagoPizzaIngredientFactory,
  IPizzaIngredientFactory,
} from '../ingredient/factories';
import {CheesePizza, ClamPizza, Pizza} from '../menu';

export class ChicagoPizzaStore extends PizzaStore {
  pizza: Pizza = null;
  ingredientFactory: IPizzaIngredientFactory =
    new ChicagoPizzaIngredientFactory();

  protected createPizza(type: string): Pizza {
    if (type === 'cheese') {
      this.pizza = new CheesePizza(this.ingredientFactory);
      this.pizza.setName('Chicago Style Cheese Pizza');
    } else if (type === 'clam') {
      this.pizza = new ClamPizza(this.ingredientFactory);
      this.pizza.setName('Chicago Style Clam Pizza');
    }

    return this.pizza;
  }
}
