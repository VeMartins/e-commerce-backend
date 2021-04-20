import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

// api for /api/orders

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        total: req.body.total,
        shippingPrice: req.body.shippingPrice,
        tax: req.body.tax,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).send({
        message: "New Order Created",
        order: createdOrder,
      });
    }
  })
);
// /api/orders/:id
orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send({
        order: order,
      });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

orderRouter.put(
  "/:id/pay",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.status(200).send({ message: "Order Paid!", order: updatedOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default orderRouter;
