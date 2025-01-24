const express = require("express");
const { hello } = require("./routes/misc/HelloWorld");
const { searchAngels } = require("./routes/controllers/searchAngels");
const { fetchCollected } = require("./routes/controllers/fetchCollected");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Running...");
});

app.get("/hello", hello);
app.get("/search", searchAngels);
app.get("/collected", fetchCollected);