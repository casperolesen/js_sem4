const mymodule = require('./mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, (err, data) => {
    if (err) return console.log(err);
        
    data.forEach(file => {
        console.log(file);
    });
    
})