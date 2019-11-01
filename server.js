const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const knex = require("knex")(configuration);

module.knex(knex);

app.get("/api/v1/papers", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
