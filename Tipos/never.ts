(()=>{
    //* El never significa que la funcion no debe 
    //* tener un punto de retorno
    const error = ( msg:string ):never => {
     throw new Error(msg);
    }

    error('auxilio');
    console.log('ya no llega aqui');
})()