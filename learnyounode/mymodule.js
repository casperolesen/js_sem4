const fs = require("fs");
const path = require("path");

function filterDir(dir, ext, callback) {
    fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err);

        data = data.filter(file => path.extname(file) === `.${ext}`);
        callback(null, data);
    });
}

module.exports = filterDir;