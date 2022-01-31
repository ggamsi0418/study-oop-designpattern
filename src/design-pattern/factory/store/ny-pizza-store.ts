import {PizzaStore} from '.';
import {
  IPizzaIngredientFactory,
  NYPizzaIngredientFactory,
} from '../ingredient/factories';
import {CheesePizza, ClamPizza, Pizza} from '../menu';

export class NYPizzaStore extends PizzaStore {
  pizza: Pizza = null;
  ingredientFactory: IPizzaIngredientFactory = new NYPizzaIngredientFactory();

  protected createPizza(type: string): Pizza {
    if (type === 'cheese') {
      this.pizza = new CheesePizza(this.ingredientFactory);
      this.pizza.setName('New York Style Cheese Pizza');
    } else if (type === 'clam') {
      this.pizza = new ClamPizza(this.ingredientFactory);
      this.pizza.setName('New York Style Clam Pizza');
    }

    return this.pizza;
  }
}
