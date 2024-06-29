const express = require("express");
const connectToDB = require("./config/connect");

connectToDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Furniture Renting API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
