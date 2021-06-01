// *** User router ***
const express = require("express");
const router = express.Router();

// model
const {getAll, getById, getReviewById} = require("../models/yelp-model");

// get all attorneys from search query parameters
router.get("/", (req, res) => {
    const term = req.query.term;
    const location = req.query.location;

    getAll(term, location)
        .then((getAllResults) => {
            res.status(200).json(getAllResults.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
});

// get attorney by id
router.get("/:id", (req, res) => {
    getById(req.params.id)
        .then((getByIdResults) => {
            res.status(200).json(getByIdResults.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
});

// get attorney by id
router.get("/:id/reviews", (req, res) => {
    getReviewById(req.params.id)
        .then((getReviewResults) => {
            res.status(200).json(getReviewResults.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
});

module.exports = router;
