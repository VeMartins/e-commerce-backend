import express from "express";
import expressAsyncHandler from "express-async-handler";

import { isAdmin, isAuth } from "../utils.js";
import {
  getAllProducts,
  getSingleProduct,
  postNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

//  /api/products
productRouter.get("/", expressAsyncHandler(getAllProducts));

// /api/product/:id ---> its at the end to prevent :id to be treated as /seed
productRouter.get("/:id", expressAsyncHandler(getSingleProduct));

// /api/products/create
productRouter.post(
  "/create",
  isAuth,
  isAdmin,
  expressAsyncHandler(postNewProduct)
);

// /api/products/:id
productRouter.put("/:id", isAuth, isAdmin, expressAsyncHandler(updateProduct));

// /api/products/:id
productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(deleteProduct)
);
export default productRouter;

//http://localhost:5000/api/products/seed --> for testing purposes
// database connection
/*productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(products);
    res.send({ createdProducts });
  })
);*/
