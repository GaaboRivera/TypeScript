(() => {
  //* una clase abstracta no sirve para instanciarse en alguna variable
  //* solo sirve para que sea extendida a otras clases
  //! error => const mut = new Mutante() si la clase Mutante es abstracta
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo salvado";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  const wolwerine: Mutante = new Xmen("Wolwerine", "Logan");
  const magneto: Mutante = new Villian("Magnus", "Magneto");

  // console.log(wolwerine);
  // console.log(magneto);

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  // printName(wolwerine);
})();
