const express = require("express");

const app = express();

app.get("/health", (request, response) => {
    response.statusCode(200).json({
        status: "OK"
    });
});

module.exports = app;