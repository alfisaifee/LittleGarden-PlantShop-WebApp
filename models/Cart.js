import mongoose from "mongoose";
const { Schema } = mongoose;

const CartItemSchema = new Schema({
  productId: { type: String, required: true },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less then 1."],
    default: 1,
  },
  dateAdded: { type: Date, default: Date.now },
});

const CartSchema = new Schema({
  userId: { type: String, required: true },
  items: [CartItemSchema],
});

export default mongoose.model("Cart", CartSchema);
