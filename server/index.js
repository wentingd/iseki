require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const routes = require("./routes");
const port = process.env.SERVER_PORT;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/", routes);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});