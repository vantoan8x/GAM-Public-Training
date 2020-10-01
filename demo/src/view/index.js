// Load all file in this folder except index.js

var IndexLink = {};

require("fs").readdirSync(__dirname).forEach(function(file) {
    if(file.endsWith(".js") && !file.endsWith("index.js")) {
        let name = file[0].toUpperCase() + file.substr(1, file.length-4);
        IndexLink[name] = require("./" + file);
    }
});

module.exports = IndexLink;