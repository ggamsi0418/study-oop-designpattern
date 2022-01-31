export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  prepare(): void {
    console.log(`Preparing: ${this.name}`);
    console.log(`Tossing dough: ${this.dough}`);
    console.log(`Adding sauce: ${this.sauce}`);
    console.log(`Adding toppings: ${JSON.stringify(this.toppings)}`);
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official Pizza Store box');
  }

  getName(): string {
    return this.name;
  }
}
