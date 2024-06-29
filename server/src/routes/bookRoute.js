const express = require("express");
const Booking = require("../model/booking");

const router = express.Router();

router.post("/booking", async (req, res) => {
  const { user, product, startDate, endDate, qty } = req.body;

  try {
    order = new Booking({ user, product, startDate, endDate, qty });
    await order.save();

    res.status(201).json({ success: "Order Created Successfull", order });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
