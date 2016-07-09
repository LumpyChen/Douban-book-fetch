const http = require("http");
const url = require("url");
const port = 5000 || process.env.PORT;

var server = http.createServer(function(req,res){

  const url_part = url.parse(req.url);

  var opts={
        host: "api.douban.com" ,
        port: 80,
        path: url_part.pathname,
        headers: req.headers,
        method: req.method
    };

  var creq = http.request(opts, function (cres) {
      res.writeHead(cres.statusCode,cres.headers);
      cres.pipe(res);
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.pipe(creq);

});

server.listen(port,"localhost",function (err) {
    if(err) throw err;
    console.log(`Listening on ${server.address().port}......`);
});
