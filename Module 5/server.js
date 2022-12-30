const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/form" && req.method === "GET") {
      fs.readFile("./form.html", (err, data) => {
        res.end(data);
      });
    }
    if (req.url === "/form" && req.method === "POST") {
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
      });
      req.on("end", () => {
        res.writeHead(200, { contentType: "text/plain" });
        let params = new URLSearchParams(body);
        res.write("Your first name is:" + params.get("firstname") + "\n");
        res.write("Your last name is:" + params.get("lastname"));
        res.end();
      });
    }
    if (req.url.startsWith("/querystring")) {
      let params = new URL("http://localhost" + req.url).searchParams;

      let decode = {};
      params.forEach((key, val) => {
        decode[key] = val;
      });
      res.end(JSON.stringify(decode));
    }
  })
  .listen(8000);
