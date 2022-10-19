(() => {
  const batman: string = "batman";
  const linternaVerde: string = "Linterna Verde";
  const superman: string = `Superman`;

  console.log(batman.toLocaleUpperCase());

  console.log(`I'm ${batman}`);

  console.log(batman[10]?.toLocaleUpperCase() || "no da el ancho");
})();
