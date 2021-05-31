// *** User router ***
const express = require("express");
const router = express.Router();

// model
const {getAll} = require("../models/yelp-model");

//  -if logged in
router.get("/", (req, res, next) => {
    const term = req.query.term;
    const location = req.query.location;

    getAll(term, location)
        .then((data) => {
            res.status(200).json(data.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
});

module.exports = router;
