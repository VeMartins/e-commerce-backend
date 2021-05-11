import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const postNewProduct = async (req, res) => {
  const product = new Product({
    title: "sample name" + Date.now(),
    img: "/uploads/product_image_not_available.png",
    thumbnail1: "/uploads/product_image_not_available.png",
    thumbnail2: "/uploads/Botanica.jpg",
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
};

const updateProduct = async (req, res) => {
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
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    const deletedProduct = await product.remove();
    res.send({ message: "Product Deleted", product: deletedProduct });
  } else {
    res.status(404).send({ message: "Product to be deleted not found" });
  }
};
export {
  getAllProducts,
  getSingleProduct,
  postNewProduct,
  updateProduct,
  deleteProduct,
};
