const http = require('http');

const url = process.argv[2];
//console.log(url);

http.get(url, function  (res) {  
    res.setEncoding('utf8'); 
    res.on('data', function (data) {    
        //res.writeHead(200, data);
        console.log(data);
    });   
    res.on('error', console.error)
}).on('error', console.error);