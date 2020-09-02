const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const file_ext = process.argv[3];
let files = undefined;
let filtered = undefined;

function readDir(filter){
    fs.readdir(dir, function doneReading(err, list) {
        err ? console.log(err) : files = list;
        //return err ? err : list;
        filter();
    });
}

function filterFiles(log){
    let temp = files.filter(file => path.extname(file) === `.${file_ext}`);
    temp.forEach(element => {
        console.log(element);
    });
}

function logFiles(){
    console.log(files);
}

readDir(filterFiles);
//readDir(logFiles);
