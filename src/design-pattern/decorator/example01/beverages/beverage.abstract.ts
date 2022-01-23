export abstract class Beverage {
  description = '제목 없음';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}
