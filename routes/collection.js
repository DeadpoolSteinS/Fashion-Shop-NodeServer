const express = require("express");
const collectionRouter = express.Router();
const { Collection } = require("../models/collection");

collectionRouter.get("/api/collections/", async (req, res) => {
  try {
    const collections = await Collection.find({});
    res.json(collections);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

collectionRouter.post("/api/add-collection", async (req, res) => {
  try {
    const { name, image } = req.body;
    let collection = new Collection({
      name,
      image,
    });
    collection = await collection.save();
    res.json(collection);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// collectionRouter.get("/api/products/search/:name", async (req, res) => {
//   try {
//     const products = await Product.find({
//       name: { $regex: req.params.name, $options: "i" },
//     });

//     res.json(products);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

module.exports = collectionRouter;
