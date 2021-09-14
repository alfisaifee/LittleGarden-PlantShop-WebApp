import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

router.get("/cart/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      res.send(cart.items);
    } else {
      res.send(null);
    }
  } catch (err) {
    res.json(500).send({ message: err.message });
  }
});

router.post("/cart/:id", async (req, res) => {
  const userId = req.params.id;
  const item = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = await Cart.create({ userId });
    }
    let itemIndex = cart.items.findIndex((p) => p.productId === item.productId);
    if (itemIndex !== -1) {
      return res.status(400).send("Item already in Cart. Proceed to Checkout"); // change to this style
    } else {
      cart.items.push({ productId: item.productId });
    }
    cart = await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/cart/:userId/:itemId", async (req, res) => {
  Cart.updateOne(
    { userId: req.params.userId },
    { $pull: { items: { productId: req.params.itemId } } },
    (err, result) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(result);
    }
  );
});

router.put("/cart/:userId/:itemId", async (req, res) => {
  const quantity = req.body.quantity;
  let cart = await Cart.findOne({ userId: req.params.userId });
  let itemIndex = await cart.items.findIndex(
    (p) => p.productId === req.params.itemId
  );
  cart.items[itemIndex]["quantity"] = quantity;
  cart.save();
  res.status(200).send(quantity);
});

export default router;
