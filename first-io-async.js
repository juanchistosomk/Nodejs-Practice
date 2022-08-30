const fs = require('fs');
const filename = process.argv[2];
let lines='';

fs.readFile(filename, 'utf8', function(err, data) {   //Devuelve Buffer Asynchronously 
    if (err) {  
        return console.error(err); 
    }
    lines = data.split('\n').length;
    console.log(lines);
}); 






