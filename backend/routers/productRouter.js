import express from "express";
import expressAsyncHandler from "express-async-handler";
import products from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

// implementing Products api to send all the products
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

//http://localhost:5000/api/products/seed --> for testing purposes
// database connection
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Product.remove({});  ---> deletes all users
    const createdProducts = await Product.insertMany(products);
    res.send({ createdProducts });
  })
);

//implementing single item api ---> its at the end to prevent :id to be treated as /seed from above
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
);

export default productRouter;
