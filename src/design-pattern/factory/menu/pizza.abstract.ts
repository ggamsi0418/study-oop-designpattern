import {ICheese} from '../ingredient/cheese';
import {IClam} from '../ingredient/clam';
import {IDough} from '../ingredient/dough';
import {IPepperoni} from '../ingredient/pepperoni';
import {ISauce} from '../ingredient/sauce';
import {IVeggie} from '../ingredient/veggie';

export abstract class Pizza {
  name: string;
  dough: IDough;
  sauce: ISauce;
  veggies: IVeggie[];
  cheese: ICheese;
  pepperoni: IPepperoni;
  clam: IClam;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official Pizza Store box');
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString() {
    console.log(`${this.name}`);
  }
}
