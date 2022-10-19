(() => {
  //*  type es una palabra reservada para definir un tipo de Objeto
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  // let aquaman: { name: string, age: number, powers: string[], getName?: () => string  } = {
  //*   ↑↓
  let aquaman: Hero = {
    name: "Alen Tuds",
    age: 45,
    powers: ["supervelocidad"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["supervelocidad"],
  };
})();
