(() => {
  const addNumbers = (a: number, b: number): number => a + b;

  const greet = (name: string): string => `Hola ${name}`;

  const saveTheWorld = (): string => `El mundo esta salvado`;

  //* let myFunction: Function;
  //* myFunction = 10;
  //* console.log(myFunction)

  //* Funcion para que solo acepte numeros y retorne un numero
  let myFuncNumber: (y: number, z: number) => number;
  myFuncNumber = addNumbers;
  console.log(myFuncNumber(1, 2));

  //* Funcion para que solo acepte string y retorne un string
  let myFuncString: (y: string) => string;
  myFuncString = greet;
  console.log(myFuncString("Gabo"));

  let myFuncString2: () => string;
  myFuncString2 = saveTheWorld;
  console.log(myFuncString2());
})();
