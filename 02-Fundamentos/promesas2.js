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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoFound = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (!empleadoFound) {
            reject(`El empleado con id ${id} no fue encontrado en la base de datos`);
        } else {
            resolve(empleadoFound);
        }
    });
};

let getSalarios = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioFound = salarios.find((salario) => {
            return salario.id === empleado.id;
        });

        if (!salarioFound) {
            reject(`El empleado ${empleado.nombre} no tiene salario asociado`);
        } else {
            resolve(salarioFound);
        }
    })



}

getEmpleado(4).then((empleado) => {

    getSalarios(empleado).then((salario) => {
            console.log(`El salario de ${empleado.nombre} es ${salario.salario}`);
        }, (err) => {
            console.log(err)
        })
        //console.log(`Se encontro el empleado llamado ${empleado.nombre} con id ${empleado.id}`);
}, (err) => {
    console.log(err);
});

// let getSalario = (empleado, callback) => {

//     let salario = salarios.find((salario) => {
//         return salario.id === empleado.id;
//     });

//     if (!salario) {
//         callback(`El empleado ${empleado.nombre} no tiene salario asociado`);
//     } else {
//         callback(null, salario.salario, empleado.nombre);
//     }
// };


// getEmpleado(5, (err, empleado) => {
//     if (err) {
//         console.log(err);
//     } else {
//         getSalario(empleado, (err, salario, nombre) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(`El empleado llamado ${nombre} tiene un salario de ${salario} pesos`)
//             }
//         });
//     }
// });