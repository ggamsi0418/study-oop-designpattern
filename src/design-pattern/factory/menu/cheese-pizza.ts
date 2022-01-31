import {IPizzaIngredientFactory} from '../ingredient/factories';
import {Pizza} from './pizza.abstract';

export class CheesePizza extends Pizza {
  constructor(private ingredientFactory: IPizzaIngredientFactory) {
    super();
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}
