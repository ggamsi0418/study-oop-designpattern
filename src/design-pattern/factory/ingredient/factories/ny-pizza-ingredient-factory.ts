import {IPizzaIngredientFactory} from '.';
import {ICheese} from '../cheese';
import {ReggianoCheese} from '../cheese/reggiano-cheese';
import {FreshClam, IClam} from '../clam';
import {IDough} from '../dough';
import {ThinCrustDough} from '../dough';
import {IPepperoni} from '../pepperoni';
import {SlicedPepperoni} from '../pepperoni';
import {ISauce, MarinaraSauce} from '../sauce';
import {Garlic, IVeggie, Mushroom, Onion, RedPepper} from '../veggie';

export class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
  createDough(): IDough {
    return new ThinCrustDough();
  }

  createSauce(): ISauce {
    return new MarinaraSauce();
  }

  createCheese(): ICheese {
    return new ReggianoCheese();
  }

  createVeggies(): IVeggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni(): IPepperoni {
    return new SlicedPepperoni();
  }

  createClam(): IClam {
    return new FreshClam();
  }
}
