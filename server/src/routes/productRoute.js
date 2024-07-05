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
    res.json({ success: "Product Created Successfully!", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error while creating product..!" });
  }
});

// Get All Product
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error while fetching product..!" });
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
    res.status(500).json({ error: "Error while fetching product..!" });
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

    res.json({ success: "Product Updated Successfully", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error while updating product..!" });
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.json({ success: "Product Deleted Successfully", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error while deleting product..!" });
  }
});

module.exports = router;
