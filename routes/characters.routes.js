const express = require("express");
const axios = require("axios");
const router = express.Router();
const mongoose = require("mongoose");
// const Character = require("../models/Character");

router.get(`/characters`, async (req, res) => {
  // res.status(200).json({ message: "je suis sur la route GET /characters" });
  // console.log("req", req);
  try {
    const name = req.query.name || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY_MARVEL}&name=${name}&limit=${limit}&skip=${skip}`
    );
    // console.log("response", response);
    if (response) {
      // console.log("response.data.results", response.data.results);
      // data = response.data.results;
      // console.log("data", data);
      res.status(200).json(response.data.results);
    }
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
