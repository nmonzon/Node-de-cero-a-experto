//1
// function sumar(a, b) {
//     return a + b;
// }

//2
// let sumar = (a, b) => {
//     return a + b;
// }

//3
//let sumar = (a, b) => a + b;
//console.log(sumar(10, 20));
//1 == 2 == 3

//Segunda manera
// let saludo = () => "Hola Mundo"
// console.log(saludo());

//Tercer manera
// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }
// let saludar = nombre => `Hola ${nombre}`
// console.log(saludar('Nico'));

//cuarta forma
// let saludar = (nombre) => `Hola ${nombre}`
// console.log(saludar('Nico'));

let ejemplo = (id, callback) => {

    let person = {
        name: "Juan",
        id: id
    }

    if (person.id !== 20){
        callback(`Error al encontrar el id ${person.id} en la base de datos`);
    }else{
        callback(null, `El usuario con id ${person.id} es ${person.name}`);
    }
}

ejemplo(22, (err, person) => {
    if(err){
        console.log(err);
    }else{
        console.log(person);
    }
});