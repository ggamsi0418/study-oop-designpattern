import {MenuComponent} from './menu-component.abstract';

export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = [];

  constructor(private name: string, private descriptoin: string) {
    super();
  }

  add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    this.menuComponents.forEach((v, i) => {
      if (v.getName() === menuComponent.getName()) {
        this.menuComponents.splice(i, 1);
      }
    });
  }

  getChild(i: number) {
    return this.menuComponents[i];
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.descriptoin;
  }

  print(): void {
    console.log(`\n${this.getName()}, ${this.getDescription()}`);
    console.log('-----------------------------------');

    this.menuComponents.forEach(menuComponent => {
      menuComponent.print();
    });
  }
}
