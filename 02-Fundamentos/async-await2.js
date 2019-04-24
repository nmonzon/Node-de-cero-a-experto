let empleados = [{
    id: 1,
    nombre: 'Lucas'
}, {
    id: 2,
    nombre: 'Nicolas'
}, {
    id: 3,
    nombre: 'Monzon'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleado = async(id)=>{
    
    let empleado = empleados.find(empleado =>{
        return id == empleado.id
    })

    if(!empleado){
        throw new Error(`Empleado con id ${id} no encontrado.`);
    }else{
        return empleado;
    }
}

/*let getEmpleado = (id) =>{

    return new Promise((resolve, reject)=>{

        let empleado = empleados.find(empleado =>{
            return empleado.id === id;
        });
    
        if(!empleado){
            reject(`Empleado con id ${id} no encontrado.`);
        }else{
            resolve(empleado)
        }
    });
}*/

let getSalario = async(empleado) => {

        let salario = salarios.find((salario) => {
            return salario.id === empleado.id;
        });
    
        if (!salario) {
            throw new Error(`El empleado ${empleado.nombre} no tiene salario asociado`);
        } else {
            return salario;
        }    
};
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `El empleado ${empleado.nombre} tiene un salario de $${salario.salario}`;
}

getInformacion(3)
.then(msg =>{
    console.log(msg);
}).catch(e => {
    console.log(e)
});
/*getEmpleado(3).then(empleado =>{
    return getSalario(empleado);
}).then( resp => {
    console.log(resp);
}).catch( err =>{
    console.log(err);
})*/
