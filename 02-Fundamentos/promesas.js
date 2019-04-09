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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoFound = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (!empleadoFound) {
            reject(`No se encontro el empleado con id ${id} en la base de datos`);
        } else {
            resolve(empleadoFound);
        }
    });
}

getEmpleado(4).then(empleado => {
    console.log(`Se encontro el empleado con id ${empleado.id} en la base de datos`);
}, (err) => {
    console.log(err);
});