import {Iterator} from './iterator.interface';
import {MenuItem} from './menu-item';

export class DinerMenuIterator implements Iterator {
  position = 0;

  constructor(private items: MenuItem[]) {}

  next(): object {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
}
