import {MenuComponent} from './menu-component.abstract';

export class Waitress {
  constructor(private allMenus: MenuComponent) {}

  printMenu(): void {
    this.allMenus.print();
  }
}
