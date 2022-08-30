const mymodule = require('./mymodule');

const dirname = process.argv[2]
const ext = process.argv[3];

mymodule(dirname, ext, function (err, datos) { 
    if(err) console.log(err);
    
    datos.forEach(element => {
        console.log(element);
    }); 
    
   
});