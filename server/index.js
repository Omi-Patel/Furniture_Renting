const express = require("express");
const connectToDB = require("./config/connect");

const users = require("./src/routes/userRoute");
const products = require('./src/routes/productRoute');

connectToDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Furniture Renting API");
});

app.use("/api/users", users);
app.use('/api/products', products);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
