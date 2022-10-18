(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado");
    }

    public getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("constructor xmen llamado");
    }

    //* Ejemplo getter
    get fullName() {
      return `${this.name} ${this.realName}`;
    }

    //* Ejemplo setter
    set fullName(name: string) {
      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  // const wolwerine = new Xmen("Logan", "Wolwerine", true);

  // wolwerine.fullName = "Jorge";

  //   console.log(wolwerine.fullName);
  //   wolwerine.getFullNameDesdeXmen();
})();
