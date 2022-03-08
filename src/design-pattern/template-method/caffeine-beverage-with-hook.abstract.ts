export abstract class CaffeineBeverageWithHook {
  async prepareRecipe(): Promise<void> {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  boilWater(): void {
    console.log('물 끓이는 중');
  }

  pourInCup(): void {
    console.log('컵에 따르는 중');
  }

  async customerWantsCondiments(): Promise<boolean> {
    return true;
  }
}
