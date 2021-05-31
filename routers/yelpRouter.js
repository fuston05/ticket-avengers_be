// *** User router ***
const express = require("express");
const router = express.Router();
const axios = require("axios");

//  -if logged in
router.get("/", (req, res, next) => {
    const term = req.query.term;
    const location = req.query.location;

    axios
        .get(`${process.env.BASE_URL}?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        })
        .then((data) => {
            res.status(200).json(data.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
});

module.exports = router;
