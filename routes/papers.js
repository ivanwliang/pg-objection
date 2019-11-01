const express = require("express");
const router = express.Router();

const Paper = require("../models/Paper");
const Footnote = require("../models/Footnote");

module.exports = router => {
  router.get("/papers", async (req, res) => {
    const papers = await Paper.query();
    res.json(papers);
  });
};
