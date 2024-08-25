const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

// Subscribe route
router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

module.exports = router;
