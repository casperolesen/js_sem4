const http = require('http');
const url = require('url');

const customAlbum = require('./ex4-jsonplaceholder-api');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>JSONPlaceHolder API</h2>
          <a href="/api/albumthreewords">/api/albumthreewords</a>
        `);
        return res.end();
    }

    if (req.url === '/api/albumthreewords') {
        let data = await customAlbum(3);
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        return res.end();
    }

    if (req.url === '/api/album/:words') {
        console.log(req.url)
        let data = await customAlbum(req.params('words'));
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        return res.end();
    }

});

server.listen(3000);
console.log('listening on 3000');

