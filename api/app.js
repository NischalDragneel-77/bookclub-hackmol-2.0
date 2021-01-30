var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
<<<<<<< HEAD
=======
require('dotenv').config({ path: './config.env' })
>>>>>>> e62bb1821d1561fa68fd9a2850e5ea4053130a87

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/authenticationRouter");
var bookRouter = require("./routes/bookRouter");
const { NotImplemented } = require("http-errors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/user", authRouter);
app.use("/book", bookRouter);
module.exports = app;
