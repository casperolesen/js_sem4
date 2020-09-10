const crypto = require('crypto')

function makeSecureRandom(size) {
    return new Promise(function(resolve, reject) {

        crypto.randomBytes(size, function(err, buffer) {
            if(err) {
                reject(err)
            } else {
                let secureHex = buffer.toString('hex');
                resolve({length: size, random: secureHex})
            }
        })

    })
}

function getSecureRandom(sizes) {
    let promises = sizes.map(makeSecureRandom)
    
    return Promise.all(promises);
}

module.exports = getSecureRandom;