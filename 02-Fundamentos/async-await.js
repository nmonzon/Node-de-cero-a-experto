let getNombre2 = async(name2)=>{
    return `Hola ${name2}`
}

let saludo = async(name) =>{

    let saludar = await getNombre2(name);
    return saludar;
}

saludo("Juan").then(mensaje => {
    console.log(mensaje);
})
.catch(error =>{
    console.log(error);
})

/*let getNombre = (name) =>{
    return new Promise((resolve, reject) =>{
        if(name =="Juan"){
            reject("error")
        }
        resolve(name);
    })
}

getNombre2("Juancito").then((name) =>{
    console.log(name);
})
.catch(error =>{
    console.log(error);
})*/