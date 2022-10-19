(() => {
  // * Undefined es diferente a null
  // * Null es diferente a void
  function callBatman(): void {
    return;
  }
  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(a);
})();
