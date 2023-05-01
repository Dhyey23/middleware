const fs = require("fs");
const port = 3000
const http = require("http");


const server = http.createServer((req, res) => {
  if (req.url == "/login" && req.method == "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const { userName, fullName,email,phoneNumber} = JSON.parse(data);
     
      const user = { userName, fullName,email,phoneNumber };
      const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
      //console.log(users)
      const findUser = users.mydata.find((users) => email === users.email && userName ===users.userName);
      if (findUser) {
        res.end("User already exists.");
      }
      else{

      users.mydata.push(user);
      fs.writeFileSync("./users.json", JSON.stringify(users), "utf8");
      res.end('data added')
      }
    });

  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
});
