import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const { Schema } = mongoose;

const productSchema = new Schema({
  product: {
    name: String,
    description: String,
    price: Number,
    currency: String,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
