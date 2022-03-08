import {CaffeineBeverageWithHook} from './caffeine-beverage-with-hook.abstract';

export class TeaWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log('차를 우려내는 중');
  }

  addCondiments(): void {
    console.log('레몬을 추가하는 중');
  }

  async customerWantsCondiments(): Promise<boolean> {
    return (await this.getUserInput()) === 'y';
  }

  private async getUserInput(): Promise<string> {
    const readlineSync = require('readline-sync');

    const answer = readlineSync.question('차에 레몬을 넣어 드릴까요? (y/n) ');

    return answer.toLowerCase();
  }
}
