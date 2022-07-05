const express = require("express");
const routes = express.Router();

const User = require("./controller/UserController");

routes.get("/user", User.readUser);
routes.post("/userScores", User.addScore);
routes.post("/uploadPicture", User.updatePicture);
routes.post("/signup", User.createUser);
routes.post("/login", User.authUser);

module.exports = routes;
