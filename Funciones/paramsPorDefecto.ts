(() => {

    //* Parametro por defecto                                           ↓↓↓
    const fullName = (firtName: string, pathName?: string, upper: boolean = false): string => {
        return upper ? `${firtName} ${pathName}`.toUpperCase() : `${firtName} ${pathName}`
    }
 
    let name = fullName('Gabo', 'Rivera', true)
    console.log(name)
})()