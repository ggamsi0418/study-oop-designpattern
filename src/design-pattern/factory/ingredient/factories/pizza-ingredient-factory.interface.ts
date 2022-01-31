import {ICheese} from '../cheese';
import {IClam} from '../clam';
import {IDough} from '../dough';
import {IPepperoni} from '../pepperoni';
import {ISauce} from '../sauce';
import {IVeggie} from '../veggie';

export interface IPizzaIngredientFactory {
  createDough(): IDough;
  createSauce(): ISauce;
  createCheese(): ICheese;
  createVeggies(): IVeggie[];
  createPepperoni(): IPepperoni;
  createClam(): IClam;
}
