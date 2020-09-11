const fs = require("fs");

let readFileP = () => new Promise(function (resolve, reject) {
    fs.readFile("challengeText.txt", "utf8", function (err, content) {
        if (err) {
            reject(new Error(err))
        } else {
            resolve(content)
        }
    })

})

readFileP()
    .then(res => console.log(res))
    .catch(err => console.log(err))