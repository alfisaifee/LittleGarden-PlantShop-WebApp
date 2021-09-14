import express from "express";
import Products from "../models/Product.js";
import { getFilterQuery, getSortQuery } from "../controllers/controller.js";

const router = express.Router();

router.post("/products", async (req, res) => {
  const filterQuery = getFilterQuery(req.body.filter);
  const sortQuery = getSortQuery(req.body.sort);
  const limit = req.body.limit;
  Products.find(filterQuery)
    .sort(sortQuery)
    .limit(limit)
    .then((product) => {
      res.json(product);
    });
});

router.get("/product/:id", async (req, res) => {
  Products.findOne({ _id: req.params.id }).then((products) => {
    res.send(products);
  });
});

router.get("/products/best", async (req, res) => {
  Products.find({})
    .sort({ rating: -1 })
    .limit(6)
    .then((product) => {
      res.json(product);
    });
});
export default router;
