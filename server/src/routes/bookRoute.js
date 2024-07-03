const express = require("express");
const Booking = require("../model/booking");
const User = require("../model/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { user, product, startDate, endDate, qty } = req.body;
  // console.log(req.user);

  try {
    order = new Booking({ user, product, startDate, endDate, qty });
    await order.save();

    const olduser = await User.findById({ _id: req.user._id });

    olduser.orders.push(order._id);
    await olduser.save();

    res.status(201).json({ success: "Order Created Successfull", order });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
