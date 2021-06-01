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

const getById = (id) => {
    return axios.get(`${process.env.BY_ID_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
    });
};

const getReviewById = (id) => {
    return axios.get(`${process.env.BY_ID_URL}/${id}/reviews`, {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
    });
};

module.exports = {
    getAll,
    getById,
    getReviewById,
};
