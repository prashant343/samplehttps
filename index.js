var fs = require('fs');
var https = require('https');
var app = require('express')();
var options = {
   key  : fs.readFileSync('/Users/prashantkaushik/Desktop/samplehttps/key1.key'),
   cert : fs.readFileSync('/Users/prashantkaushik/Desktop/samplehttps/certificate1.cert')
};

app.get('/', function (req, res) {
   res.send('Hello World!');
});

https.createServer(options, app).listen(3000, function () {
   console.log('HTTPS server Started!');
});