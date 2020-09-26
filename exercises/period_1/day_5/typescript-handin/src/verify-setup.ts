//import http = require('http');
import * as http from 'http'; // npm i @types/node
import fetch from 'node-fetch'; // npm i node-fetch & npm i @types/node-fetch

const server = http.createServer(async (req, res) => {
    const data = await fetch(`https://swapi.dev/api/people/1/`).then(res => res.json());
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);

console.log('Server running on port 8080');
