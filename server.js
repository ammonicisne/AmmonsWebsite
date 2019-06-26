const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

var cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(port, host, function() {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("server started");
