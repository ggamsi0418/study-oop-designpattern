import {NYPizzaStore, ChicagoPizzaStore} from './store';

class PizzaTestDrive {
  static main(): void {
    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    let pizza = nyStore.orderPizza('cheese');
    console.log(`Ethan ordered a(an) ${pizza.getName()} 🍕🍕🍕`);
    console.log('---------------------------------------\n\n');

    pizza = chicagoStore.orderPizza('cheese');
    console.log(`Joel ordered a(an) ${pizza.getName()} 🍕🍕🍕`);
    console.log('---------------------------------------\n\n');
  }
}

PizzaTestDrive.main();
