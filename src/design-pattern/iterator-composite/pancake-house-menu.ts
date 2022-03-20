import {Iterator} from './iterator.interface';
import {MenuItem} from './menu-item';
import {PancakeHouseMenuIterator} from './pancake-house-menu-iterator';

export class PancakeHouseMenu {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem(
      "K&B's Pancake Breakfast",
      'Pancakes with scrambled eggs and toast',
      true,
      2.99
    );

    this.addItem(
      'Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99
    );

    this.addItem(
      'Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.49
    );

    this.addItem(
      'Waffles',
      'Waffles with your choice of blueberries or strawberries',
      true,
      3.59
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  createIterator(): Iterator {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}
