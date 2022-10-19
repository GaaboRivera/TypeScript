(() => {
  //* Si colocacamos el '?' despues del parametro que recibe
  //* la funcion se esta dando por hecho que el parametro es opcional

  //*                                        ↓
  const fullName = (firtName: string, pathName?: string): string => {
    return `${firtName} ${pathName || "No lastName"}`;
  };

  let name = fullName("Gabo");
  console.log(name);
})();
