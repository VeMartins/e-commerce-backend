import Order from "../models/orderModel.js";

const getAdminOrders = async (req, res) => {
  const orders = await Order.find({}).populate("user", "name");
  res.send(orders);
};

const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
};

const postCreateOrder = async (req, res) => {
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
};

const getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send({
      order: order,
    });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
};

const putOrderPayment = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.status(200).send({ message: "Order Paid!", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
};
const putOrderDelivery = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.status(200).send({ message: "Order delivered!", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order to be delivered Not Found" });
  }
};

const adminDeleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    const deletedOrder = await order.remove();
    res.send({ message: "Order Deleted", order: deletedOrder });
  } else {
    res.status(404).send({ message: "Order to be deleted Not Found" });
  }
};

export {
  getAdminOrders,
  getUserOrders,
  postCreateOrder,
  getSingleOrder,
  putOrderPayment,
  putOrderDelivery,
  adminDeleteOrder,
};
