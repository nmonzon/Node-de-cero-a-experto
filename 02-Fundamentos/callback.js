    getElementById = (id, callback) => {

        let usuario = {
            nombre: 'Nicolas',
            id
        }

        if (id == 20) {
            callback(`El usuario con id ${id} no existe en la base de datos`);
        } else {
            callback(null, usuario);
        }
    }

    getElementById(20, (err, usuario) => {

        if (err != null) {
            return console.log(err)
        }

        console.log("el usuario es", usuario);
    })