let persona = {
    nombre: "Nicolas",
    apellido: "Monzon",
    poder: "Regeneracion",
    getNombreCompleto: function() {
        return `${this.nombre} ${this.apellido} tiene el poder de ${this.poder}`;
    }
}

// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let nombreCompleto = persona.getNombreCompleto();
// console.log(nombreCompleto);

let { nombre: primerNombre, apellido, poder } = persona;

console.log(primerNombre, apellido, poder);