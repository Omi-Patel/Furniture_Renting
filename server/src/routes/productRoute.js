const express = require("express");
const Product = require("../model/product");
const router = express.Router();

// Create Product
router.post("/", async (req, res) => {
  const { name, description, price, imageUrl, available } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      available,
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get All Product
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get Single Product
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById({ _id: id });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  const { name, description, price, imageUrl, available } = req.body;
  const { id } = req.params;
  try {
    let product = await Product.findById({ _id: id });
    if (!product) return res.status(404).json({ msg: "Product not found" });

    product = await Product.findByIdAndUpdate(
      id,
      { $set: { name, description, price, imageUrl, available } },
      { new: true }
    );

    res.json({ msg: "Product Updated Successfully", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.json({ msg: "Product Deleted Successfully", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
