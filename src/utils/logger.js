const fs = require('fs');
const path = require('path');

const logsFile = path.join(__dirname, 'logs.txt');

function logger(req, res, next){
    const log = `[${new Date().toISOString()}] Method: ${req.method} | route: ${req.url}\n`

    fs.appendFile(logsFile, log, (err) => {
        if (err){
        console.log('Error saving logs', err);

        }
    });

    next();
}

module.exports = logger;
