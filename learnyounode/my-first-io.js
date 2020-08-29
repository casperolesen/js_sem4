const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString();
const lines = str.split('\n');
const lines_count = lines.length - 1; // the test file does not have a newline char ('\n') at the end of the last line

console.log(lines_count);