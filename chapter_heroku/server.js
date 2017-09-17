'use strict'

const http = require('http')
const fs = require('fs')

let server = http.createServer (function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.end(data);
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  let addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});