const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const knex = require("knex")(configuration);
const { Model } = require("objection");

Model.knex(knex);

app.use(require("./routes/papers"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
