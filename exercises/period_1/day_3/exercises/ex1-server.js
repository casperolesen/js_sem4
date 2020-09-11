const http = require('http');
const getSecureRandom = require('./ex1-crypto-module');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>SecureRandoms API</h2>
          <a href="/api/securerandoms">/api/securerandoms</a>
        `);
        return res.end();
    }

    if (req.url === '/api/securerandoms') {
        let data = await getSecureRandom([48, 40, 32, 24, 16, 8])
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        return res.end();
    }

});

server.listen(3000);
console.log('listening on 3000');

