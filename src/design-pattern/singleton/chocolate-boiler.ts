class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstacne: ChocolateBoiler | null = null;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance() {
    if (this.uniqueInstacne === null) {
      this.uniqueInstacne = new ChocolateBoiler();
    }

    return this.uniqueInstacne;
  }

  isEmpty() {
    return this.empty;
  }

  isBoiled() {
    return this.boiled;
  }

  fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
      // 보일러에 우유&초콜릿을 혼합한 재료를 집어 넣는다.
    }
  }

  boil() {
    if (!this.isEmpty() && !this.isBoiled()) {
      // 재료를 끓인다.
      this.boiled = true;
    }
  }

  drain() {
    if (!this.isEmpty() && this.isBoiled()) {
      // 끊인 재료를 다음 단계로 넘긴다.
      this.empty = true;
    }
  }
}
