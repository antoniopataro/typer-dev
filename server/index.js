require("./config/dbConfig");

const express = require("express");
const app = express();

const routes = require("./routes");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);

require("dotenv").config();
app.listen(process.env.SERVER_PORT);
