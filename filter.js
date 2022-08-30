// Busca en una ruta por la extension del archivo
const fs = require('fs');

const dirname = process.argv[2];  // ingreso ruta
const extension = process.argv[3]; // ingreso extension
let c = 0;

fs.readdir(dirname, function (err, files) { 
    if(err)
    return console.log(err);

    for(let i = 0; i<files.length; i++) {
        files[i].split('.')[1] === extension ? console.log(files[i]) : c = i;
    }
    //if(c+1 == files.length) return console.log("Archivo no encontrado", files.length);
});