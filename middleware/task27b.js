const http = require('http');
const fs = require('fs');
const PORT = 3000;


const API_KEY = 'dhyey';

const fileName = 'users.json';

const server = http.createServer((req, res) => {
  if (req.url === '/login'&&req.method=="GET") {
    const Key = req.headers['api_key'];
    if (Key !== API_KEY) {
      
      res.end('Unauthorized');
      
    }

    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        
        res.end(' Server Error');
        
      }
      
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
  });

