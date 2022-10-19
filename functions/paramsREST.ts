(() => {
  //* Argumentos REST que es el resto de argumentos que llegan a una funcion

  const fullname = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullname("Clark", "Joseph", "Kent");
  console.log(superman);
})();
