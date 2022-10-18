(()=>{
    //* Si colocacamos el tipo de parametro que recibe
    //* la funcion se esta dando por hecho que el parametro es obligatorio

    //*                           ↓               ↓
    const fullName = (firtName:string, pathName:string):string => {
        return `${firtName} ${pathName}`;
    }

    let name = fullName('Gabo', 'Rivera')
    console.log(name)
})()