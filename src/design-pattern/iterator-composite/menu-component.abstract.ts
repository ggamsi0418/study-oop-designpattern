export abstract class MenuComponent {
  add(menuComponent: MenuComponent): void {
    throw new Error('Unsupproted Operation Exception');
  }
  remove(menuComponent: MenuComponent): void {
    throw new Error('Unsupproted Operation Exception');
  }
  getChild(i: number): MenuComponent {
    throw new Error('Unsupproted Operation Exception');
  }

  getName(): string {
    throw new Error('Unsupproted Operation Exception');
  }
  getDescription(): string {
    throw new Error('Unsupproted Operation Exception');
  }
  getPrice(): number {
    throw new Error('Unsupproted Operation Exception');
  }
  isVegetarian(): boolean {
    throw new Error('Unsupproted Operation Exception');
  }

  print(): void {
    throw new Error('Unsupproted Operation Exception');
  }
}
