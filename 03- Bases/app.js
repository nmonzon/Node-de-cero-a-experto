const fs = require('fs');

const base = 5;
var data = "";
let multiplicar = ()=>{
    
    for (let index = 0; index < 10; index++) {
        data += `${base} x ${index} = ${base * index}\n`;
    }
    fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido creado!');
      });    
}

multiplicar();

