import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    thumbnail1: { type: String, required: true },
    thumbnail2: { type: String, required: true },
    detail: { type: String, required: true },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    price: { type: Number, required: true },
    sale: { type: Number, required: true },
    stock: { type: Number, required: true },
    amount: { type: Number, required: true },
    featured: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
