import {CoffeeWithHook} from './coffee-with-hook';
import {TeaWithHook} from './tea-with-hook';

class BeverageTestDrive {
  static async main() {
    const teaHook = new TeaWithHook();
    const coffeeHook = new CoffeeWithHook();

    console.log('\n차 준비중 ...');
    await teaHook.prepareRecipe();

    console.log('\n커피 준비중 ...');
    await coffeeHook.prepareRecipe();
  }
}

BeverageTestDrive.main();
