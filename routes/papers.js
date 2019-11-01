const express = require("express");
const router = express.Router();

const Paper = require("../models/Paper");
const Footnote = require("../models/Footnote");

router.get("/papers", async (req, res) => {
  const papers = await Paper.query();
  res.json(papers);
});

router.get("/papers/:id", async (req, res) => {
  const paper = await Paper.query()
    .findById(req.params.id)
    .eager("footnotes");
  res.json(paper);
});

router.get("/footnotes/:id", async (req, res) => {
  const footnote = await Footnote.query().findById(req.params.id);
  res.json(footnote);
});

module.exports = router;
