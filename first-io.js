const fs = require('fs');
const filename = process.argv[2];

const file = fs.readFileSync(filename, 'utf8'); //Devuelve Buffer Sincrono
const lines = file.split('\n').length;
console.log(lines);
