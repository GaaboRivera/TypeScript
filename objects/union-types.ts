(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Gabo";
  console.log(typeof myCustomVariable);

  myCustomVariable = 10;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Gabo",
    age: 33,
    powers: ["code"],
  };
  console.log(typeof myCustomVariable);
})();
