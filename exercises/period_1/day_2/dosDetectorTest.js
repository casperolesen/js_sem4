const DOS_Detector = require('./dosDetector');

const dos_d = new DOS_Detector(2000);

// Register a listener
dos_d.on('DosDetected', (arg) => {
    console.log(arg);
});

// Test for event
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        dos_d.addUrl('http://example.com');
    }, i * 1000)
}