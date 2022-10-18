(()=>{

    let flash: { name: string, age: number, powers: string[], getName?: () => string  } = {
        name:'Barry Alen',
        age: 24,
        powers: ['supervelocidad', 'viajar en el tiempo']
    }
    flash = {
        name:'Barry Alen',
        age: 24,
        powers: ['supervelocidad', 'viajar en el tiempo'],
        getName(){
        return this.name;
        }
    }
    console.log(flash)
})()