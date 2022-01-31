import {IPizzaIngredientFactory} from '.';
import {ICheese} from '../cheese';
import {MozzarellaCheese} from '../cheese/mozzarella-cheese';
import {FrozenClam, IClam} from '../clam';
import {ThickCrustDough} from '../dough';
import {IDough} from '../dough/dough.interface';
import {IPepperoni} from '../pepperoni';
import {SlicedPepperoni} from '../pepperoni/sliced-pepperoni';
import {ISauce, PlumTomatoSauce} from '../sauce';
import {Garlic, IVeggie, Mushroom, Onion, RedPepper} from '../veggie';

export class ChicagoPizzaIngredientFactory implements IPizzaIngredientFactory {
  createDough(): IDough {
    return new ThickCrustDough();
  }

  createSauce(): ISauce {
    return new PlumTomatoSauce();
  }

  createCheese(): ICheese {
    return new MozzarellaCheese();
  }

  createVeggies(): IVeggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni(): IPepperoni {
    return new SlicedPepperoni();
  }

  createClam(): IClam {
    return new FrozenClam();
  }
}
