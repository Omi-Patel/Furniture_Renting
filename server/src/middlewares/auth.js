const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/user");

dotenv.config();

const fetchUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ error: "Not Authorized, Invalid Token" });
    }
  }

  if (!token) {
    res.status(401).json({ error: "Not Authorized, No Token" });
  }
};

module.exports = fetchUser;
