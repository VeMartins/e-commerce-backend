import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../utils.js";
import {
  adminDeleteOrder,
  getAdminOrders,
  getSingleOrder,
  getUserOrders,
  postCreateOrder,
  putOrderDelivery,
  putOrderPayment,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

//get all orders for admin
orderRouter.get("/", isAuth, isAdmin, expressAsyncHandler(getAdminOrders));
//  get list of orders for users
orderRouter.get("/myorders", isAuth, expressAsyncHandler(getUserOrders));

// api for /api/ --> creates order

orderRouter.post("/", isAuth, expressAsyncHandler(postCreateOrder));
// /api/orders/:id --> gets single order
orderRouter.get("/:id", isAuth, expressAsyncHandler(getSingleOrder));

// updates order payment --> when paid
orderRouter.put("/:id/pay", isAuth, expressAsyncHandler(putOrderPayment));

//updating delivery
orderRouter.put(
  "/:id/deliver",
  isAuth,
  isAdmin,
  expressAsyncHandler(putOrderDelivery)
);
orderRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(adminDeleteOrder)
);
export default orderRouter;
