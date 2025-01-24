const express = require("express");
const { hello } = require("./routes/misc/HelloWorld");
const { searchAngels } = require("./routes/controllers/searchAngels");
const { fetchCollected } = require("./routes/controllers/fetchCollected");
const { fetchTypes } = require("./routes/controllers/fetchTypes");
const { fetchSeries } = require("./routes/controllers/fetchSeries");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Running...");
});

app.get("/hello", hello);
app.get("/search", searchAngels);
app.get("/collected", fetchCollected);
app.get("/types", fetchTypes);
app.get("/series", fetchSeries);