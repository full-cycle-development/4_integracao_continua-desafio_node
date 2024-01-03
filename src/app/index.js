const express = require('express')
const app = express();

app.get("/", async (request, response) => {
  return response.status(200).json({ status: 200, message: "Full Cycle Rocks!" });
});

module.exports = { app }