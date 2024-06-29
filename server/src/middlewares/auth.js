const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/user");

dotenv.config();

const fetchUser = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
//   console.log(token);

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // console.log("TOKEN", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = fetchUser;
