// setTimeout(() => {
//     console.log("time Out")
// }, 3000);

let getUserById = (id, callback) => {

    let user = {
        nombre: 'Nicolas',
        id
    }

    if (id == 20) {
        callback(`No existe el usuario con el id ${id}`);
    }
    callback(null, user);
};

getUserById(1, (err, user) => {

    if (err) {
        console.log(err);
    }
    console.log('El usuario es', user);
});