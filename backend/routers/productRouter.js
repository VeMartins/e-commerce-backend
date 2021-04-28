import express from "express";
import expressAsyncHandler from "express-async-handler";
import products from "../data.js";
import Product from "../models/productModel.js";
import { isAdmin, isAuth } from "../utils.js";

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
    //await Product.remove({});
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

// creating new product
productRouter.post(
  "/create",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      title: "sample name" + Date.now(),
      img: "./images/sacoPesca.jpg",
      thumbnail1: "./images/sacoPesca.jpg",
      thumbnail2: "./images/produceBags.png",
      detail: "sample detail",
      category: "sample category",
      sub_category: "sample sub_category",
      price: 0,
      sale: 0,
      stock: 0,
      amount: 1,
      featured: false,
    });
    const createdProduct = await product.save();
    res.send({ message: "product created", product: createdProduct });
  })
);

//updating product
productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
      product.title = req.body.title;
      product.img = req.body.img;
      product.thumbnail1 = req.body.thumbnail1;
      product.thumbnail2 = req.body.thumbnail2;
      product.detail = req.body.detail;
      product.category = req.body.category;
      product.sub_category = req.body.sub_category;
      product.price = req.body.price;
      product.sale = req.body.sale;
      product.stock = req.body.stock;
      product.amount = 1;
      product.featured = req.body.featured || false;
      const updatedProduct = await product.save();
      res.send({
        message: "Product updated",
        product: updatedProduct,
      });
    } else {
      res.status(404).send({ message: "Product to be updated was not found" });
    }
  })
);
productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deletedProduct = await product.remove();
      res.send({ message: "Product Deleted", product: deletedProduct });
    } else {
      res.status(404).send({ message: "Product to be deleted not found" });
    }
  })
);
export default productRouter;
