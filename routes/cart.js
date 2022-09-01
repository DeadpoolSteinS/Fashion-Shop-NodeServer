const express = require("express");
const { Cart } = require("../models/cart");
const { Product } = require("../models/product");
const cartRouter = express.Router();

cartRouter.get("/api/carts", async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.json(cart);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

cartRouter.post("/api/add-to-cart", async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    let newCart = new Cart({
      product: product,
      quantity: 1,
    });
    let cart = await Cart.find({});

    if (cart.length == 0) {
      cart = await newCart.save();
    } else {
      let isProductFound = false;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product._id.equals(product._id)) {
          isProductFound = true;
        }
      }

      if (isProductFound) {
        let producttt = cart.find((productt) =>
          productt.product._id.equals(product._id)
        );
        producttt.quantity += 1;
        cart = await producttt.save();
      } else {
        cart = await newCart.save();
      }
    }
    res.json(cart);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = cartRouter;
