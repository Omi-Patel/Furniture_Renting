const express = require("express");
const connectToDB = require("./config/connect");
const cors = require("cors");

const users = require("./src/routes/userRoute");
const products = require("./src/routes/productRoute");
const booking = require("./src/routes/bookRoute");
const payment = require("./src/routes/paymentRoute");
const fetchUser = require("./src/middlewares/auth");


const app = express();
const PORT = process.env.PORT || 8080;
connectToDB();

app.use(
  cors({
    origin: [
      "https://furniture-renting-client.onrender.com",
      "http://localhost:5173",
    ],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Furniture Renting API");
});

app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/booking", fetchUser, booking);
app.use("/api/paynow", payment);

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
