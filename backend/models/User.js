import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Users", UserSchema);
