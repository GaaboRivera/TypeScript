(() => {
  //* Ejemplo de clase
  class Avenger {
    private name: string;
    public team: string;
    public realName?: string;
    static avgAge: number = 10;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Gabo", "Code");
  console.log(antman);
  //* Fin clase sencilla

  //* Forma de clase reducida

  class Avenger2 {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 10;
    static getAvgAge() {
      return this.name; //* aqui apunta al nombre pero de la clase
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}
    public bio() {
      return `${this.name} - ${this.team}`;
    }
  }

  const thor: Avenger2 = new Avenger2("Gabo2", "Code2", "GaboRac"); //* nueva instancia de la clase Avenger
  console.log(thor);
  console.log(thor.bio()); //* acceder a metodo public de la clase
  console.log(Avenger2.getAvgAge()); //* acceder a metodo estatico de la clase

  //* Fin Forma de clase reducida
})();
