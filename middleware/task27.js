const port = 3000
let http = require('http')
let fs = require('fs')
let server = http.createServer(function(req,res){
    if(req.method === 'GET'&& req.url==="/home"){
        //console.log("call get method")
        res.writeHead(200,{"Content-Type":"text/html"});
        //res.end(fs.readFileSync(require('path').join(__dirname, './index.html'),'utf-8'))
        res.end(fs.readFileSync(require('path').join(__dirname, './users.json'),'utf-8'))

        res.end('done!!')

    }
})

server.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
  })
