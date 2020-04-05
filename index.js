const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const foodProduct = require("./api/router/foodProductRouter");
const foodOrder = require("./api/router/foodOrderRouter");

// Router include
app.use("/", foodProduct);
app.use("/", foodOrder);

app.get("/", (req, res) => res.send("Hello World!"));

// connect server
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
