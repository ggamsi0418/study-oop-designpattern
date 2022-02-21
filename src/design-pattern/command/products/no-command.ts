import {Command} from './command.interface';
import {Product} from './product.interface';

// 일종의 널 객체 (Null Object)
export class NoCommand implements Command, Product {
  execute(): void {
    console.log('Not assigned Command');
  }

  undo(): void {
    console.log('Not assigned Command');
  }

  getProduct(): Product {
    return this;
  }

  getName(): string {
    return NoCommand.name;
  }
}
