let nombre = "Nicolas";
let apellido = "Monzon";

console.log(nombre + ' ' + apellido);
console.log(`${nombre} ${apellido}`);

let nombreCompleto = nombre + ' ' + apellido;
let nombreTemplate = `${nombre} ${apellido}`;

console.log(nombreCompleto === nombreTemplate);