const fs = require('fs');
var newline_count = undefined;

function readFileAsync(callback) {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, data) {
        err ? console.log(err) : newline_count = data.split('\n').length - 1;
        callback();
    });
};

function logNewlineCount() {
    console.log(newline_count);
}

readFileAsync(logNewlineCount);

