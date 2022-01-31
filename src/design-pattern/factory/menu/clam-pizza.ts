import {Pizza} from '.';
import {IPizzaIngredientFactory} from '../ingredient/factories';

export class ClamPizza extends Pizza {
  constructor(private ingredientFactory: IPizzaIngredientFactory) {
    super();
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}
