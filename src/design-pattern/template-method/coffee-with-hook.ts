import {CaffeineBeverageWithHook} from './caffeine-beverage-with-hook.abstract';

export class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log('필터로 커피를 우려내는 중');
  }

  addCondiments(): void {
    console.log('설탕과 커피를 추가하는 중');
  }

  async customerWantsCondiments(): Promise<boolean> {
    return (await this.getUserInput()) === 'y';
  }

  private async getUserInput(): Promise<string> {
    const readlineSync = require('readline-sync');

    const answer = readlineSync.question(
      '커피에 우유와 설탕을 넣어 드릴까요? (y/n) '
    );

    return answer.toLowerCase();
  }
}
