(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }
  interface Human {
    name: string;
    age: number;
  }

  class Mutant implements Xmen, Human {
    public name: string;
    public age: number;
    public realName: string;

    mutantPower(id: number): string {
      return this.name;
    }
  }
})();
