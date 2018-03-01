const http = require('http');
const fs = require('fs')
const url = require('url');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/other') {
    fs.readFile('other.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/other-other') {
    fs.readFile('other-other.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/main.css'){
    fs.readFile('css/main.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/other.css'){
    fs.readFile('css/other.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/other-other.css'){
    fs.readFile('css/other-other.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/other.js'){
      fs.readFile('js/other.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }
    else if (page == '/js/other-other.js'){
        fs.readFile('js/other-other.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }else{
          res.write("404: page not available");
          res.end();
        }

  });

server.listen(8000);
