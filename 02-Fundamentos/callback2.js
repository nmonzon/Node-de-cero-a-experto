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

let getEmpleado = (id) =>{

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
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) =>{
        let salario = salarios.find((salario) => {
            return salario.id === empleado.id;
        });
    
        if (!salario) {
            reject(`El empleado ${empleado.nombre} no tiene salario asociado`);
        } else {
            resolve(salario);
        }
    });

    
};

getEmpleado(3).then(empleado =>{
    return getSalario(empleado);
}).then( resp => {
    console.log(resp);
}).catch( err =>{
    console.log(err);
})
/*let getEmpleado = (id, callback) => {

    let empleadoFound = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoFound) {
        callback(`El empleado con id: ${id} no fue encontrado en la base de datos`);
    } else {
        callback(null, empleadoFound);
    }
};

getEmpleado(5, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, salario, nombre) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`El empleado llamado ${nombre} tiene un salario de ${salario} pesos`)
            }
        });
    }
});*/