// * Inferir tipos y modo estricto
(()=>{
    const a = 10
    const b: number = 10 /** esto es lo correcto en TypeScript */

    function sayHello (msg: string) {
        console.log(msg)
    }

    sayHello('Hola Mundo')

})()