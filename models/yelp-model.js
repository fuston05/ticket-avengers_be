const axios = require("axios");

const getAll = (term, location) => {
    return axios.get(
        `${process.env.BASE_SEARCH_URL}?term=${term}&location=${location}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        }
    );
};

module.exports = {
    getAll,
};
