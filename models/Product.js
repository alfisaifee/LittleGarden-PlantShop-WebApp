import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  imageURL: { type: String, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, required: true },
  indoorLight: String,
  size: { type: String, required: true },
  maintenance: String,
});

export default mongoose.model("Products", ProductSchema);
