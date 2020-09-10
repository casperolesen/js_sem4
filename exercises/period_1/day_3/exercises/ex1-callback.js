const crypto = require('crypto')

// using only callbacks
let callback_crypto = {title: "3 Secure Randoms", randoms: []};
crypto.randomBytes(48, function(err, buffer) {
    if (err) {
        console.log(err);
    } else {
        let secureHex = buffer.toString('hex');
        callback_crypto.randoms.push({length: 48, random: secureHex})

        crypto.randomBytes(40, function(err, buffer) {
            if (err) {
                console.log(err);
            } else {
                let secureHex = buffer.toString('hex');
                callback_crypto.randoms.push({length: 40, random: secureHex})

                crypto.randomBytes(32, function(err, buffer) {
                    if (err) {
                        console.log(err);
                    } else {
                        let secureHex = buffer.toString('hex');
                        callback_crypto.randoms.push({length: 32, random: secureHex})

                        console.log(callback_crypto); // done
                    }
                })
            }
        })
    } 
  });
  