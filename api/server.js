// server.js
const express = require("express");
const cors = require("cors");
const server = express();
const helmet = require("helmet");

// global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// define routers
const yelpRouter = require("../routers/yelpRouter");

// use routers
server.use("/yelp", yelpRouter);

// root route
server.get("/", (req, res) => {
    res.status(200).json("**** Welcome, the Server is live! ****");
});

// fall back case
server.use("/", (req, res) => {
    res.status(404).json({Error: "Did not recognize that url"});
});

module.exports = server;
