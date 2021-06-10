// Import Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

// Node env
require("dotenv").config();
const environment = process.env.NODE_ENV || "development";

// Import Routes
const users = require("./routes/api/users");
const todos = require("./routes/api/todos");

const app = express();

// Express App Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors Setup
const corsConfig =
  environment === "development"
    ? {
        origin: "http://localhost:3000",
      }
    : {};
app.use(cors(corsConfig));

// Connect to mongodb
const db = require("./config/db").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/api/user", users);
app.use("/api/todo", todos);

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
