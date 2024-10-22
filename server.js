const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
require("dotenv").config();
require("./src/database/connect");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(compression());
app.use(morgan("combined"));

app.use("/api", require("./src/routes/route.init"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
