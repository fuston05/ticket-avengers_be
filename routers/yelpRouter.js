// *** User router ***
const express = require("express");
const router = express.Router();
const axios = require("axios");

// get all users
//  -if logged in
router.get("/", (req, res, next) => {
    const baseUrl = "https://api.yelp.com/v3/businesses/search";
    const term = req.query.term;
    const location = req.query.location;

    console.log("text:  *****************\n");

    axios
        .get(`${baseUrl}?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer R_T3F6GtMW5kth_W6X-WFZCg26kjUz0gCaCZ_LD7kgU3QMOThCLgZKu7jKpgg7o5vbrA212ZCXsmrst65EiuOlU0b9Afyy4piza1RNvcKp1muSLCkkhOkgzNSP60YHYx`,
            },
        })
        .then((data) => {
            console.log("data: ", data);
            res.status(200).json(data.data);
        })
        .catch((err) => {
            console.log("err: ", err);
            res.status(500).json(err);
        });
});

module.exports = router;
