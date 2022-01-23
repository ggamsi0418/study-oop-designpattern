import {Beverage} from '../beverages';

export abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}
