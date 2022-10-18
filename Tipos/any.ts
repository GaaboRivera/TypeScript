(() => {
  let avenger: any = 132;
  let exists;
  let power;

  avenger = "Dr strange";
  console.log(avenger.charAt(0));

  //* * Estos son tipos de casteo de una variable ↓↓
  console.log((avenger as string).charAt(0));

  avenger = 150.485168854;
  console.log((<number>avenger).toFixed(3));
  console.log(avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
