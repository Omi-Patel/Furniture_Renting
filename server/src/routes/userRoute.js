const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
// const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    user = new User({ name, email, password, mobile });
    await user.save();

    const payload = { user: { id: user.id, email: user.email } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ success: "User Registered Successfully..!", token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const payload = { user: { id: user.id, email: user.email } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ success: "Login Successfull..!", token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// User Profile
router.get("/profile/:userId", async (req, res) => {
  const id = req.params.userId;

  // console.log(id);
  try {
    const user = await User.findById({ _id: id })
      .select("-password")
      .populate({
        path: "orders",
        populate: {
          path: "product",
        },
      });
    // console.log(user);
    res.json({ msg: "User Verified Successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/verifyuser", async (req, res) => {
  try {
    const token = req.body.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ isValid: false, message: "Invalid token" });
      }
      res.json({ isValid: true, decoded });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
