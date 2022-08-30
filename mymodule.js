const fs = require('fs');

module.exports = function( dirname , extension, callback) {
    
    fs.readdir(dirname, function( err, files ) {
    if(err)
        return callback(err);
    
    const result = [];
    for (let i = 0; i < files.length; i++){
        files[i].split('.')[1] === extension ? result.push(files[i]) : null;
    }
    callback(null, result);

  });

};