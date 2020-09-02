const http = require('http');
const osInfo = require('./osInfo');
const DOS_Detector = require('./dosDetector');

const dos_d = new DOS_Detector(2000);

//Register for the "DosDetected" event and console.log the url and time info.
dos_d.on('DosDetected', (arg) => {
    console.log(arg);
});

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osInfo()));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <a href="/api/os-info">/api/os-info</a></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  dos_d.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');

